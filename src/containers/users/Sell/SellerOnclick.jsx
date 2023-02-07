import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { TiArrowSortedDown } from 'react-icons/ti'
import './sellerhome.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { width } from "@mui/system";
import {RiSearch2Line} from 'react-icons/ri'

function SellerFrontPage(params) {
  ReactDOM.render(
    <div className="SellerFrontPage">
      <div className="SellerFrontPage__main__section__news">
        <h2>最新消息</h2>
        <p>這是第一則重要消息！！看的到代表一切正常不用擔心，看不到代表要去客服反應！</p>
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
      <div></div>
    </div>,
    document.getElementById("sellerhome__main"));
}
function SellerPage(params) {
  ReactDOM.render(
    <div className="sellerpage">
       <h3 className="sellerpage__title mb-0">藝術家資訊</h3> 
      <div className="sellerpage__main">
        <div className="sellerpage__main__left">
          <div className= "sellerpage__main__left__name">
            <p>用戶姓名</p>
            <input className="sellerpage__main__left_input" type="text" value="" style={{ border: "none" }}/>
          </div>
          <div className="sellerpage__main__right__name">
            <p>帳號</p>
            <input className="sellerpage__main__left_input" type="text" value="" style={{ border: "none" }}/>
          </div>
          <Button className="sellerpage__main__left_botton" variant="dark">更改</Button>
        </div>
        <div className="sellerpage__main__right">
          <p className="sellerpage__title_roomIntro mb-0">畫廊介紹</p>
          <textarea className="sellerpage__main__right_textarea" value="" style={{ border:"none"}} />
          <Button className="sellerpage__main__left_roomIntro_botton" variant="dark">更改</Button>
        </div>
      </div>
    </div>,
    document.getElementById("sellerhome__main"));
}
function SellerUpload(params) {
  ReactDOM.render(
    <div className="SellerUpload">
      <div className="SellerUpload__upload">
      
          <label className="SellerUpload__uploadIcon">
            {/* 增加檔案 */}
            <input type="file" style={{ display: 'none' }}></input>
          </label>
     
      </div>
      <div className="SellerUpload__detail ">
        <div className="SellerUpload__name">
          <div
            style={{
              backgroundColor: "#C9D7E3",
              textAlign: "center" }}
          >
            基本資料
          </div>
          <div style={{ backgroundColor: "#EAEAEA", padding: "20px" }}>
            <div className="SellerUpload__name__input">
              <p>商品名稱:</p>
              <input type="text" value="" style={{ border: "none" }}/>
            </div>
            <div className="SellerUpload__name__textarea">
              <p>商品介紹:</p>
              <textarea
                value=""
                style={{
                  width: "330px", 
                  height: "25px", 
                  border:"none"}}
              />
            </div>
          </div>
        </div>
        <div className="SellerUpload__money">
          <div
            style={{
              backgroundColor: "#C9D7E3",
              textAlign: "center" 
            }}
          >
            銷售資訊
          </div>
          <div style={{ backgroundColor: "#EAEAEA", padding: "20px" }}>
            <div className="SellerUpload__money__input">
              <p>商品價格:</p>
              <input type="text" value="" style={{ border: "none", width: "140px"}}/>
            </div>
            <div className="SellerUpload__money__input">
              <p>付款方式:</p>
              <input type="text" value="" style={{ border: "none", width: "140px" }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="SellerUpload__product ">
        <div className="SellerUpload__kind">
          <div
            style={{
              backgroundColor: "#C9D7E3",
              textAlign: "center" 
            }}
          >
            商品規格
          </div>
          <div className="d-flex" style={{ backgroundColor: "#EAEAEA", padding: "20px" }}>
            <div className="SellerUpload__kind__left">
              <div className="SellerUpload__kind__select">
                <p>作品年份:</p>
                <select style={{ border: "none" }}>
                  <option value='A'>第一個選項</option>
                  <option value='B'>第二個選項</option>
                  <option value='C'>第三個選項</option>
                </select>
              </div>
              <div className="SellerUpload__kind__select">
                <p>作品種類:</p>
                <select  style={{ border: "none" }}>
                  <option value='A'>第一個選項</option>
                  <option value='B'>第二個選項</option>
                  <option value='C'>第三個選項</option>
                </select>
              </div>
            </div>
            <div className="SellerUpload__kind__right">
              <p>作品尺寸:</p>
              <div className="SellerUpload__kind__input">
                長
                <input type="text" value="" style={{ width:"50px", border: "none" }}/>
                寬
                <input type="text" value="" style={{ width:"50px", border: "none" }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="SellerUpload__attributes">
          <div
            style={{
              backgroundColor: "#C9D7E3",
              textAlign: "center" 
            }}
          >
            商品屬性
          </div>
          <div style={{ backgroundColor: "#EAEAEA", padding: "20px" }}>
            <div className="SellerUpload__attributes__select">
              <p>風格</p>
              <select  style={{ border: "none" }}>
                <option value='A'>第一個選項</option>
                <option value='B'>第二個選項</option>
                <option value='C'>第三個選項</option>
              </select>
            </div>
            <div className="SellerUpload__attributes__select">
              <p>色系</p>
              <div>紅</div>
              <div>綠</div>
              <div>藍</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SellerUpload__button_wrap">
      <Button variant="dark" className="me-2">取消</Button>
      <Button variant="dark">儲存並送出</Button>
      </div>
    </div>,
    document.getElementById("sellerhome__main"));
}
function SellerProduct(params) {
  ReactDOM.render(
    <div>
      <section id="SellerProduct__section ">
      <nav id="SellerProduct__nav d-flex">
        <h1 className="SellerProduct__total">共有26件</h1>
          <div className="SellerProduct__aside-list"> 
              {/* <div className="SellerProduct__aside-searchBar">
                <RiSearch2Line className="SellerProduct__aside-searchBar-icon" style={{width:"40px", height:"40px"}}
                />
              </div> */}
              <Button className="SellerProduct__aside_add" variant="dark">新增商品+</Button>
              <Button className="SellerProduct__aside-sort" variant="dark">排序</Button>
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
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>

              <div className="SellerProduct__item col">         
                <img className="SellerProduct__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC8zMTU0NzdfZGY4ZjEyMjI4MzlmZDE4MWY4N2ZjYmI3ZmQyNmM2NTkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=8801d203789aa1e99e51ff76f768a15bd51149a7b3e4cc942db977b937fe671e"/>
            
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xOTQxNVwvbWFpblwvem9vbVwvODg3OTQxXzYwNzNhNjU4MzcyZTFiNTY2MzVlNTVlZDRhZjBlNTFmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=afb4f906096d0f37c64b83457e1f8c52b3b75c6f0494b03efa5684e8356086cc"
                />
         
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
              <div className="SellerProduct__item col">
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
              
                <div className="SellerProduct__card-text">
                  <p className="SellerProduct__productId">
                    品名品名品名品名
                  </p>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </div>
            </div>
            </div>
        </main>
      </section>
    </div>,
    document.getElementById("sellerhome__main"));
}
function SellerOrder(params) {
  ReactDOM.render(<div>
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
                <Button className="" variant="--color-bg" style={{ border: "none" }}> 
                  訂單編號
                  <TiArrowSortedDown/>
                </Button>
              </th>
              <th>
                <Button className="" variant="--color-bg" style={{ border: "none" }}> 
                  出貨狀況
                  <TiArrowSortedDown/>
                </Button>
              </th>
              <th>
                <Button className="" variant="--color-bg" style={{ border: "none" }}> 
                  金額
                  <TiArrowSortedDown/>
                </Button></th>
              <th>
                <Button className="" variant="--color-bg" style={{ border: "none" }}> 
                  售出時間
                  <TiArrowSortedDown/>
                </Button>
              </th>
              <th className="sellerorder__main_detil_count">
                <Button className="" variant="--color-bg" style={{ border: "none" }}> 
                  售出數量
                  <TiArrowSortedDown/>
                </Button>
              </th>
              <th className="sellerorder__main_detil_button"></th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td className="sellerorder__main_detil_count" >1</td>
              <td className="sellerorder__main_detil_button">
                <Button  variant="dark">詳細資料</Button>
              </td>
            </tr>
            <tr>
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td className="sellerorder__main_detil_count">1</td>
              <td className="sellerorder__main_detil_button">
                <Button  variant="dark">詳細資料</Button>
              </td>
            </tr>            <tr>
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td className="sellerorder__main_detil_count">1</td>
              <td className="sellerorder__main_detil_button">
                <Button  variant="dark">詳細資料</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.getElementById("sellerhome__main"));
}

export { SellerFrontPage, SellerPage, SellerUpload, SellerProduct, SellerOrder};