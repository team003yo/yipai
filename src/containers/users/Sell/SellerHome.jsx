import { React, useState, useEffect } from 'react'
import './sellerhome.css'
import { Link } from 'react-router-dom'
// import logo1 from '../../../logo1.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { TiArrowSortedDown } from 'react-icons/ti'
import SellerButton from './SellerButton'
import { RiSearch2Line } from 'react-icons/ri'
import axios from 'axios'

import {
  SellerFrontPage,
  SellerPage,
  SellerUpload,
  SellerProduct,
  SellerOrder,
} from './SellerOnclick'

// icon
import buyerImg from '../image/buyHead.png'
import sellerHouseIcon from '../image/sellerHouseIcon.svg'
import sellerpageIcon from '../image/sellerpageIcon.svg'
import sellerupIcon from '../image/sellerupIcon.svg'
import sellerlistIcon from '../image/sellerlistIcon.svg'
import sellerorderIcon from '../image/sellerorderIcon.svg'

function SellerHome() {
  let [UserData, setUserData] = useState() //記錄數值
  let [UserOldDatas, setUserOldDatas] = useState() //原本的數據
  let [UserOrders, setUserOrders] = useState() //記錄使用者訂單

  // 只執行一次
  useEffect(() => {
    async function getMember2() {
      let response2 = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      )
      setUserData(response2.data[0].users_id)
    //   setUserData(response2.data[0])
      console.log(response2.data[0])
      setUserOldDatas(response2.data[0])
      let responseOrder = await axios.get(
        `http://localhost:3001/api/members/orders`,
        {
          withCredentials: true,
        }
      )
      setUserOrders(responseOrder.data[0])
    }
    getMember2()
  }, [])
  //  記錄輸入的數值
  const [UserInputData, setUserInputData] = useState({
    username: '',
    account: '',
    // email: "",
    phone: '',
  })
  const [UserIntroduce, setUserIntroduce] = useState({
    users_introduce: '',
  })
  // 每次輸入後更新使用者資料
  useEffect(() => {
    console.log(UserInputData)
  }, [UserInputData])
  const handleChange = (event) => {
    setUserInputData({
      ...UserInputData,
      [event.target.name]: event.target.value,
    })
  }
  // 每次輸入後更畫廊資料
  useEffect(() => {
    console.log(UserIntroduce)
  }, [UserIntroduce])
  const handleChange2 = (event) => {
    setUserIntroduce({
      ...UserIntroduce,
      [event.target.name]: event.target.value,
    })
  }
  // 送出輸入資料
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`http://localhost:3001/api/members`, {
        username: UserInputData.username,
        account: UserInputData.account,
        // email: UserInputData.email,
        phone: UserInputData.phone,
        usersId: UserData,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }
    console.log(UserOldDatas)
    console.log(UserOrders)
  //================================================================
    //  上傳大頭貼
    const [sellerPic, setSellerPic] = useState({
        photo: "",
    });
    // 每次輸入後更新產品資料
    useEffect(() => {
        console.log(sellerPic);
    }, [sellerPic]);
    
    // 檔案更新值
    function handleSellerPicUpload(e) {
        // file input 的值並不是存在 value 欄位裡
        setSellerPic({ ...sellerPic, photo: e.target.files[0] });
    }

    // 送出輸入資料
    async function handleSellerPicSubmit(e) {
        console.log("handleProductSubmit");
        // 關閉表單的預設行為
        e.preventDefault();
        let formData = new FormData();
        formData.append("photo", sellerPic.photo);
        let response = await axios.post(
            "http://localhost:3001/uploadsPhoto/product",
            formData,{
                withCredentials: true,
            }
        );
        console.log(response.data);
        alert('圖片上傳成功');
    }
    //========================================================
  //  記錄輸入的產品
  const [productInputData, setProductInputData] = useState({
    name: '',
    photo: '',
    width: '',
    height: '',
    material: '',
    style: '',
    artist: '',
    creation_year: '',
    work_hue: '',
    price: '',
    detail_text: '',
  })
  // 每次輸入後更新產品資料
  useEffect(() => {
    console.log(productInputData)
  }, [productInputData])
  const handleProductChange = (event) => {
    setProductInputData({
      ...productInputData,
      [event.target.name]: event.target.value,
    })
  }
  function handleUpload(e) {
    // file input 的值並不是存在 value 欄位裡
    setProductInputData({ ...productInputData, photo: e.target.files[0] })
  }
  // 送出輸入資料
  async function handleProductSubmit(e) {
    console.log('handleProductSubmit')
    // 關閉表單的預設行為
    e.preventDefault()
    let formData = new FormData()
    formData.append('name', productInputData.name)
    formData.append('photo', productInputData.photo)
    formData.append('width', productInputData.width)
    formData.append('height', productInputData.height)
    formData.append('material', productInputData.material)
    formData.append('style', productInputData.style)
    formData.append('artist', productInputData.artist)
    formData.append('creation_year', productInputData.creation_year)
    formData.append('work_hue', productInputData.work_hue)
    formData.append('price', productInputData.price)
    formData.append('detail_text', productInputData.detail_text)
    let response = await axios.post(
      'http://localhost:3001/product',
      formData
      // withCredentials: true,
    )
    console.log(response.data)
  }

  console.log(UserData)

  return (
    <>
      <div className="d-flex">
        <div className="sellerhome__main" id="sellerhome__main">
          <div id="SellerFrontPage" style={{ display: 'block' }}>
            <div className="SellerFrontPage__main__section__news">
              <h2>最新消息</h2>
              <p>這是第一則重要消息！！看的到代表一切正常不用擔心！</p>
            </div>
            <div className="SellerFrontPage__main__section__todolist">
              <h2>待辦事項</h2>
              <div>
                <ul className="SellerFrontPage__status list-unstyled">
                  <li>
                    {/* <Link to={`/about`} ></Link> */}
                    <h1>0</h1>
                    {/* <br /> */}
                    <h3>未出貨</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待處理</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>已處理</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待取消</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>待退貨</h3>
                  </li>
                  <li>
                    {/* <Link><h1>0</h1></Link> */}
                    <h3>已售完</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="SellerPage" style={{ display: 'none' }}>
            <div className="sellerpage">
              <div className="sellerpage__title mb-0">藝術家資訊</div>
              <div className="sellerpage__main">
                <form
                  className="sellerpage__main__left"
                  method="post"
                  name="leftForm"
                  onSubmit={handleSubmit}
                >
                  <div className="sellerpage__main__left__name">
                    <label>用戶姓名</label>
                    <input
                      type="text"
                      style={{ border: 'none' }}
                      name="username"
                      value={UserInputData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="sellerpage__main__right__name">
                    <label>帳號</label>
                    <input
                      type="text"
                      name="account"
                      style={{ border: 'none' }}
                      value={UserInputData.account}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="sellerpage__main__right__name">
                    <label>電話</label>
                    <input
                      type="tel"
                      name="phone"
                      style={{ border: 'none' }}
                      value={UserInputData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button variant="dark" type="submit">
                    更改
                  </Button>
                </form>
                <form className="sellerpage__main__right">
                  <p>畫廊介紹</p>
                  <textarea
                    style={{
                      width: '350px',
                      height: '350px',
                      backgroundColor: '#F9F7F2',
                      border: 'none',
                      padding: '10px',
                    }}
                    value={UserInputData.username}
                    onChange={handleChange2}
                    required
                  />
                  <Button variant="dark" type="submit">
                    更改
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div id="SellerUpload" style={{ display: 'none' }}>
            <div className="SellerUpload">
              <div className="SellerUpload__upload">
                <div>
                  {/* <img
                    src={
                      UserImg.includes('http')
                        ? UserImg
                        : 'http://localhost:3001/public/uploads/' + UserImg
                    } //
                    alt=""
                    className=""
                  /> */}
                </div>
                <div>
                  <label className="SellerUpload__uploadIcon">
                    {/* 增加檔案 */}
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleUpload}
                      style={{ display: 'none' }}
                    ></input>
                  </label>
                </div>
              </div>
              <div className="SellerUpload__detail">
                <div className="SellerUpload__name">
                  <div
                    style={{
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
                    }}
                  >
                    基本資料
                  </div>
                  <div
                    style={{
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
                    }}
                  >
                    <div className="SellerUpload__name__input">
                      <p>商品名稱:</p>
                      <input
                        type="text"
                        name="name"
                        value={productInputData.name}
                        onChange={handleProductChange}
                        required
                        style={{ border: 'none' }}
                      />
                    </div>
                    <div className="SellerUpload__name__textarea">
                      <p>商品介紹:</p>
                      <textarea
                        type="text"
                        name="detail_text"
                        value={productInputData.introduce}
                        onChange={handleProductChange}
                        required
                        style={{
                          width: '330px',
                          height: '25px',
                          border: 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__money">
                  <div
                    style={{
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
                    }}
                  >
                    銷售資訊
                  </div>
                  <div
                    style={{
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
                    }}
                  >
                    <div className="SellerUpload__money__input">
                      <p>商品價格:</p>
                      <input
                        type="text"
                        name="price"
                        value={productInputData.price}
                        onChange={handleProductChange}
                        required
                        style={{
                          border: 'none',
                          width: '140px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="SellerUpload__product">
                <div className="SellerUpload__kind">
                  <div
                    style={{
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
                    }}
                  >
                    商品規格
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
                    }}
                  >
                    <div className="SellerUpload__kind__left">
                      <div className="SellerUpload__kind__select">
                        <p>作品年份:</p>
                        <input
                          type="text"
                          name="creation_year"
                          value={productInputData.creation_year}
                          onChange={handleProductChange}
                          required
                          style={{ border: 'none', width: '100px' }}
                        />
                      </div>
                      <div className="SellerUpload__kind__select">
                        <p>作品種類:</p>
                        <select
                          name="material"
                          onChange={handleProductChange}
                          style={{
                            border: 'none',
                          }}
                        >
                          <option value="" style={{ display: 'none' }}>
                            請選擇
                          </option>
                          <option value="油畫">油畫</option>
                          <option value="素描">素描</option>
                          <option value="版畫">版畫</option>
                          <option value="水墨">水墨</option>
                          <option value="版畫">版畫</option>
                          <option value="粉彩">粉彩</option>
                          <option value="水彩">水彩</option>
                          <option value="數位">數位</option>
                        </select>
                      </div>
                    </div>
                    <div className="SellerUpload__kind__right">
                      <p>作品尺寸:</p>
                      <div className="SellerUpload__kind__input">
                        長
                        <input
                          type="text"
                          name="height"
                          value={productInputData.height}
                          onChange={handleProductChange}
                          required
                          style={{
                            width: '50px',
                            border: 'none',
                          }}
                        />
                        寬
                        <input
                          type="text"
                          name="width"
                          value={productInputData.width}
                          onChange={handleProductChange}
                          required
                          style={{
                            width: '50px',
                            border: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SellerUpload__attributes">
                  <div
                    style={{
                      backgroundColor: '#C9D7E3',
                      textAlign: 'center',
                    }}
                  >
                    商品屬性
                  </div>
                  <div
                    style={{
                      backgroundColor: '#EAEAEA',
                      padding: '20px',
                    }}
                  >
                    <div className="SellerUpload__attributes__select">
                      <p>風格</p>
                      <select
                        name="style"
                        onChange={handleProductChange}
                        style={{ border: 'none' }}
                      >
                        <option value="" style={{ display: 'none' }}>
                          請選擇
                        </option>
                        <option value="印象">印象</option>
                        <option value="表現主義">表現主義</option>
                        <option value="幾何">幾何</option>
                        <option value="復古">復古</option>
                        <option value="超現實">超現實</option>
                      </select>
                    </div>
                    <div className="SellerUpload__attributes__select">
                      <p>色系</p>
                      <tr className="SellerUpload__color">
                        <table>
                          <tr>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-red"
                                name="work_hue"
                                value="Red"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-ori"
                                name="work_hue"
                                value="Orange"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-yel"
                                name="work_hue"
                                value="Yellow"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-gre"
                                name="work_hue"
                                value="Green"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-blu"
                                name="work_hue"
                                value="Blue"
                                onClick={handleProductChange}
                              ></button>
                            </td>

                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-pur"
                                name="work_hue"
                                value="Purple"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-bro"
                                name="work_hue"
                                value="Brown"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-whi"
                                name="work_hue"
                                value="White"
                                onClick={handleProductChange}
                              ></button>
                            </td>

                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-gra"
                                name="work_hue"
                                value="Gray"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                            <td>
                              <button
                                className="SellerUpload__color-item SellerUpload__color-item-bla"
                                name="work_hue"
                                value="Black"
                                onClick={handleProductChange}
                              ></button>
                            </td>
                          </tr>
                        </table>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Button variant="dark" className="me-2">
                取消
              </Button> */}
              <Button
                variant="dark"
                disabled={
                  !productInputData.name ||
                  !productInputData.photo ||
                  !productInputData.width ||
                  !productInputData.height ||
                  !productInputData.material ||
                  !productInputData.style ||
                  !productInputData.creation_year ||
                  !productInputData.work_hue ||
                  !productInputData.price ||
                  !productInputData.detail_text
                }
                onClick={handleProductSubmit}
              >
                儲存並送出
              </Button>
            </div>
          </div>
          <div id="SellerProduct" style={{ display: 'none' }}>
            <section id="SellerProduct__section ">
              <nav id="SellerProduct__nav d-flex">
                <h1 className="SellerProduct__total">共有26件</h1>
                <Button className="SellerProduct__aside_add" variant="dark">
                  新增商品+
                </Button>

                <div className="SellerProduct__aside-list">
                  <Button className="SellerProduct__aside-sort" variant="dark">
                    排序
                  </Button>
                </div>
              </nav>
              <main id="SellerProduct__main">
                <div class="SellerProduct__main_container">
                  <div className="SellerProduct＿main row align-items-start">
                    <div className="SellerProduct__item col">
                      <img
                        className="SellerProduct__card-img-top"
                        src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMDgwMVwvbWFpblwvem9vbVwvMTQzOTc5NV85YTU0YjcyZDE0YzdiOTM4MGI2YzFhMWU4OGY2M2UyYS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3354b764d2ecd526da29327b4a7fd33227b4909b8ea40e6d6c5e46f2700d84b9"
                      />
                      <div className="SellerProduct__card-text">
                        <p className="SellerProduct__productId">
                          品名品名品名品名
                        </p>
                        <p className="SellerProduct__article">
                          作者作者作者作者
                        </p>
                        <p className="SellerProduct__price">$16900</p>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div id="SellerOrder" style={{ display: 'none' }}>
            <div className="sellerorder__main__text ">
              <div>
                <h1>共有幾筆訂單</h1>
              </div>
              <div className="sellerorder__main__text__input">
                <input type="text" placeholder="輸入文字搜尋" />
                <Button variant="dark">排序</Button>
              </div>
            </div>
            <div className="sellerorder__main__table">
              <table className="sellerorder__main__table_table">
                <thead>
                  <tr>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: 'none' }}
                      >
                        訂單編號
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: 'none' }}
                      >
                        出貨狀況
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: 'none' }}
                      >
                        金額
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th>
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: 'none' }}
                      >
                        售出時間
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th className="sellerorder__main_detil_count">
                      <Button
                        className=""
                        variant="--color-bg"
                        style={{ border: 'none' }}
                      >
                        售出數量
                        <TiArrowSortedDown />
                      </Button>
                    </th>
                    <th className="sellerorder__main_detil_button"></th>
                  </tr>
                </thead>
                <tbody>
                    
                  <tr>
                    <td>0000000000000000000000</td>
                    <td>未出貨</td>
                    <td>2000</td>
                    <td>2023/01/14</td>
                    <td className="sellerorder__main_detil_count">1</td>
                    <td className="sellerorder__main_detil_button">
                      <Button variant="dark">詳細資料</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="_sellerhome__pic_414 m-3">
          {/* <img
            src={buyerImg}
            alt="sellerHead"
            className="_sellerhome_headImg"
          /> */}
          <label className="sellerhome__headIcon_414">
            {/* 增加檔案 */}
            <input type="file" style={{ display: 'none' }}></input>
          </label>
        </div>
        <div className="sellerhome__sidebar">
          <div className="sellerhome__sidebar__center">
            <div className="_sellerhome__pic_1920 m-3">
                
            {/* <img
                 src={UserOldDatas && UserOldDatas.user_imageHead && UserOldDatas.user_imageHead.includes("http")?UserOldDatas.user_imageHead:"http://localhost:3001/public/uploads/"+ UserOldDatas.user_imageHead} 
                        alt='buyHead'
                        className='_buyLogin_headImg'
                    /> */}
                    <label className='_buyLogin_headIcon'>
                        {/* 增加檔案 */}
                        <div>
                            <input

                                type='file'
                                id='imageHead'
                                name='imageHead'
                                style={{ display: "none" }}
                                // value={imgServerUrl}
                                onChange={handleSellerPicUpload}
                            ></input>
                        </div>
                    </label>
                    <button onClick={handleSellerPicSubmit}>送出</button>
              {/* <img
                className="sellerhome__sidebar__center_logo"
                src={
                  UserData &&
                  UserData.user_imageHead &&
                  UserData.user_imageHead.includes('http')
                    ? UserData.user_imageHead
                    : 'http://localhost:3001/public/uploads/' +
                      UserData.user_imageHead
                }
              /> */}
              {/* <img
                src={buyerImg}
                alt="sellerHead"
                className="_sellerhome_headImg"
              /> */}
              {/* <label className="sellerhome__headIcon"> */}
                {/* 增加檔案 */}
                {/* <input type="file" style={{ display: 'none' }}></input> */}
              {/* </label> */}
            </div>
            <ul className="list-unstyled sellerhome__icon ">
              <li className="d-flex">
                <SellerButton src={sellerHouseIcon} onClick={SellerFrontPage} />
                <p className="sellerhome__icon_text">首頁</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerpageIcon} onClick={SellerPage} />
                <p className="sellerhome__icon_text">個人頁面</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerupIcon} onClick={SellerUpload} />
                <p className="sellerhome__icon_text">上架商品</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerlistIcon} onClick={SellerProduct} />
                <p className="sellerhome__icon_text">商品管理</p>
              </li>
              <li className="d-flex">
                <SellerButton src={sellerorderIcon} onClick={SellerOrder} />
                <p className="sellerhome__icon_text">訂單資訊</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default SellerHome