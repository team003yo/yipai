import React from 'react'
import './register.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import { Link } from "react-router-dom";
// import HeadImg from "../HeadImg";
import { FaUserCircle } from 'react-icons/fa'
// import { height } from "@mui/system";

const Register = () => {
  const [member, setMember] = useState({
    // 自動填入
    name: '',
    account: '',
    password: '',
    confirmPassword: '',
  })
  const [users, setUsers] = useState([])
  useEffect(() => {
    // 在 component 初始化的時候跑一次，後端要資料的動作放在這裡
    async function getUsers() {
      let response = await axios.get(`http://localhost:3001/users`)
      setUsers(response.data)
    }
    getUsers()
  }, [])

  // 輸入的值更動的函式
  function handleChange(e) {
    // console.log(e);
    let newMember = { ...member }
    newMember[e.target.name] = e.target.value
    setMember(newMember)
    // setMember({ ...member, [e.target.name]: e.target.value });
    validateForm()

    function validateForm() {
      //避免submit值false後，修改內容
      document.getElementById('submit_button').disabled = true
      
      //註冊文字檢查
      document.getElementById('error_username').innerText =
        newMember.name !== '' ? '' : '請輸入名字'

      //註冊帳號檢查
      let checkccounts = users.some(
        (user) => user.users_account === newMember.account
      )
      if (checkccounts) {
        document.getElementById('error_account').innerText = '此帳號已有人使用'
        console.log('Account already exists.')
      } else {
        if (newMember.account === '') {
          document.getElementById('error_account').innerText = '請設定帳號'
        } else if (
          newMember.account.length >= 4 &&
          newMember.account.length <= 25
        ) {
          document.getElementById('error_account').innerText = ''
        } else {
          document.getElementById('error_account').innerText =
            '帳號需介於 4 到 25 字元'
        }
      }

      //註冊密碼檢查
      if (newMember.password === '') {
        document.getElementById('error_password').innerText = '請設定密碼'
      } else if (
        newMember.password.length >= 8 &&
        newMember.password.length <= 12
      ) {
        document.getElementById('error_password').innerText = ''
      } else {
        document.getElementById('error_password').innerText =
          '密碼需介於 8 到 12 字元'
      }
      //註冊密碼再次檢查
      if (newMember.password2 === '') {
        document.getElementById('error_password2').innerText = '請再次確認密碼'
      } else {
        document.getElementById('error_password2').innerText =
          newMember.confirmPassword === newMember.password
            ? ''
            : '與第一次輸入密碼不符合'
      }
      //如果錯誤條件為空，按鈕可以按
      if (
        document.getElementById('error_username').innerText === '' &&
        document.getElementById('error_account').innerText === '' &&
        document.getElementById('error_password').innerText === '' &&
        document.getElementById('error_password2').innerText === ''
      ) {
        document.getElementById('submit_button').disabled = false
      }
    }
  }

  // 上傳圖片用
  // function handleUpload(e) {
  //     // file input 的值並不是存在 value 欄位裡，是在member裡
  //     setMember({ ...member, photo: e.target.files[0] });
  // }
  async function handleSubmit(e) {
    console.log('handleSubmit')
    // 關閉表單的預設行為
    e.preventDefault()

    // 作法2: 有檔案的表單 https://developer.mozilla.org/en-US/docs/Web/API/FormData
    let formData = new FormData()
    formData.append('name', member.name)
    formData.append('account', member.account)
    formData.append('password', member.password)
    formData.append('confirmPassword', member.confirmPassword)
    let response = await axios.post(
      'http://localhost:3001/api/auth/register',
      formData
    )
    console.log(response.data)
  }
  return (
    <>
      <div id="login">
        <div className="_register_BG">
          <div className="_register_flex _register_buyerbox">
            <div className="_register_registerIcon d-flex">
              <FaUserCircle style={{ width: '50px', height: '50px' }} />
              <h2 className="_register_registerIcon＿text">買家註冊</h2>
            </div>
            <form
              method="POST"
              // 把表單傳送到
              action="http://localhost:3001/api/auth/register"
              className="_register_flex d-inline"
            >
              <input
                type="text"
                className="_register_inputBox"
                id="name"
                name="name"
                placeholder=" 姓名"
                value={member.name}
                onChange={handleChange}
              />
              <span
                id="error_username"
                style={{ color: 'red', display: 'block' }}
              ></span>
              <input
                type="text"
                className="_register_inputBox2"
                id="account"
                name="account"
                placeholder=" 帳號"
                value={member.account}
                onChange={handleChange}
              />
              <span
                id="error_account"
                style={{ color: 'red', display: 'block' }}
              ></span>
              <input
                type="password"
                className="_register_inputBox2"
                id="password"
                name="password"
                placeholder=" 密碼"
                value={member.password}
                onChange={handleChange}
              />
              <span
                id="error_password"
                style={{ color: 'red', display: 'block' }}
              ></span>
              <input
                type="password"
                className="_register_inputBox2"
                id="confirmPassword"
                name="confirmPassword"
                placeholder=" 再輸入一次密碼"
                value={member.confirmPassword}
                onChange={handleChange}
              />
              <span
                id="error_password2"
                style={{ color: 'red', display: 'block' }}
              ></span>
              <button
                id='submit_button'
                type="submit"
                className="_register_btn"
                onClick={handleSubmit}
              >
                註冊
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
