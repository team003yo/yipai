import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { TiArrowSortedDown } from 'react-icons/ti'
import './sellerhome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RiSearch2Line} from 'react-icons/ri'

function SellerSettings(params) {
  ReactDOM.render(
    <div>
      <div
        className="_buyLogin_flex"
        style={{ flexDirection: 'row', justifyContent: 'space-around' }}
      >
        <div style={{ margin: '0 2em 0 2em' }}>
          <div className="_buyLogin_Titlebox">
            <div className="_buyLogin_h4">帳戶設定</div>
          </div>
          <div className="_buyLogin_Contentbox">
            {/* 表單 */}
            <form method="post">
              <div
                className="_buyLogin_flex"
                style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
              >
                <label className="_buyLogin_h4" style={{ fontSize: 14 }}>
                  用戶姓名：
                </label>
                <input
                  className="_buyLogin_SettingInput"
                  type="text"
                  name="username"
                ></input>
              </div>
              <br />
              <button className="_buyLogin_ChangeControlBtn">更改</button>
            </form>
          </div>
        </div>
        <div style={{ margin: '0 2em 0 2em' }}>
          <div className="_buyLogin_Titlebox">
            <div className="_buyLogin_h4">帳戶設定</div>
          </div>
          <div className="_buyLogin_Contentbox">
            {/* 表單 */}
            <form method="post">
              <label className="_buyLogin_h4" style={{ fontSize: 14 }}>
                用戶姓名：
              </label>
              <input
                className="_buyLogin_SettingInput"
                type="text"
                name="username"
              ></input>
              <br />
              <button className="_buyLogin_ChangeControlBtn">更改</button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('userDown')
  )
}

function SellerFrontPage(params) {
  ReactDOM.render(
    <div>
      <div className="SellerFrontPage__main__section__news">
        <h2>最新消息</h2>
        <p>
          這是第一則重要消息！！看的到代表一切正常不用擔心，看不到代表要去客服反應！
        </p>
      </div>
      <div className="SellerFrontPage__main__section__todolist">
        <h2>待辦事項</h2>
        <div>
          <ul className="list-unstyled">
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
    document.getElementById('sellerhome__main')
  )
}
function SellerPage(params) {
  ReactDOM.render(
    <div className="sellerpage">
      <div className="sellerpage__title">藝術家資訊</div>
      <div className="sellerpage__main">
        <div className="sellerpage__main__left">
          <div className="sellerpage__main__left__name">
            <p>用戶姓名</p>
            <input type="text" value="" style={{ border: 'none' }} />
          </div>
          <div className="sellerpage__main__right__name">
            <p>帳號</p>
            <input type="text" value="" style={{ border: 'none' }} />
          </div>
          <Button variant="dark">更改</Button>
        </div>
        <div className="sellerpage__main__right">
          <p>畫廊介紹</p>
          <textarea
            value=""
            style={{
              width: '250px',
              height: '400px',
              backgroundColor: '#F9F7F2',
              border: 'none',
            }}
          />
          <Button variant="dark">更改</Button>
        </div>
      </div>
    </div>,
    document.getElementById('sellerhome__main')
  )
}
function SellerUpload(params) {
  ReactDOM.render(
    <div>
      SellerUpload
      <div>
        <div>Upload</div>
      </div>
      <div>
        <div>
          <div>基本資料</div>
          <div>
            <p>商品名稱</p>
            <input type="text" value="" style={{ border: 'none' }} />
            <p>商品介紹</p>
            <input type="text" value="" style={{ border: 'none' }} />
          </div>
        </div>
        <div>銷售資訊</div>
      </div>
      <div>
        <div>商品規格</div>
        <div>商品屬性</div>
      </div>
      <Button variant="dark">取消</Button>
      <Button variant="dark">儲存並送出</Button>
    </div>,
    document.getElementById('sellerhome__main')
  )
}
function SellerProduct(params) {
  ReactDOM.render(
    <div>
      <section id="SellerProduct__section">
        <nav id="SellerProduct__nav">
          <h1 className="SellerProduct__total">共有26件</h1>
        </nav>
      <aside id="SellerProduct__aside" >
        <ul className="SellerProduct__aside-list">
        <li className="SellerProduct__aside-li"><div className="SellerProduct__aside-searchBar">
          <RiSearch2Line className="SellerProduct__aside-searchBar-icon" style={{width:"40px", height:"40px"}}/>
        </div>
        </li>
        <li className="SellerProduct__aside-li">
        <Button variant="dark">新增商品+</Button>
        </li>
        <li className="SellerProduct__aside-li">
        <Button variant="dark">排序</Button>
        </li>
        </ul>
        </aside>
        <main id="SellerProduct__main">
          <table className="SellerProduct＿main">
            <tr className=" SellerProduct__other-product">
              <td>
                <img className="SellerProduct__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC8zMTU0NzdfZGY4ZjEyMjI4MzlmZDE4MWY4N2ZjYmI3ZmQyNmM2NTkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=8801d203789aa1e99e51ff76f768a15bd51149a7b3e4cc942db977b937fe671e"/>
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xOTQxNVwvbWFpblwvem9vbVwvODg3OTQxXzYwNzNhNjU4MzcyZTFiNTY2MzVlNTVlZDRhZjBlNTFmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=afb4f906096d0f37c64b83457e1f8c52b3b75c6f0494b03efa5684e8356086cc"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMDgwMVwvbWFpblwvem9vbVwvMTQzOTc5NV85YTU0YjcyZDE0YzdiOTM4MGI2YzFhMWU4OGY2M2UyYS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3354b764d2ecd526da29327b4a7fd33227b4909b8ea40e6d6c5e46f2700d84b9"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC85MDAwOTVfN2FhZWM3ZDc0Mjg0ZDQ1NzgxYWVjOTRhNGE5MzQyY2EuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=601f8e5811c653113228a4b0130e66339661804a70b61950cbf718d21e80ffdc"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
            </tr>
            <tr className=" SellerProduct__other-product">
              <td>
                <img className="SellerProduct__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC8zMTU0NzdfZGY4ZjEyMjI4MzlmZDE4MWY4N2ZjYmI3ZmQyNmM2NTkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=8801d203789aa1e99e51ff76f768a15bd51149a7b3e4cc942db977b937fe671e"/>
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xOTQxNVwvbWFpblwvem9vbVwvODg3OTQxXzYwNzNhNjU4MzcyZTFiNTY2MzVlNTVlZDRhZjBlNTFmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=afb4f906096d0f37c64b83457e1f8c52b3b75c6f0494b03efa5684e8356086cc"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMjYxOV83OTI0YWVmNjJjZjYxYmVkNDEzZmIyMTJhOTA2NTI0Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=5160b85669a83546d04479b705b9c1aaccbdb3d6e1605ef10ca6d45baabdd6d0"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
              <td>
                <img
                  className="SellerProduct__card-img-top"
                  src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3BpY3R1cmVzXC9jcm9wcGVkXC8zMjA5XC8yMzI0N1wvem9vbVwvc2VyaWVfMjMyNDdfMDExOTE3NjhjMDVmOWEyZGMxNDJlODEyMjY5N2YwZGYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=2e746e9c9c47e8c7da31754a05c3421c1391396a9ee89444fd8138c4e0e0bb2b"
                />
                <div className="SellerProduct__card-text">
                  <h5 className="SellerProduct__productId">
                    品名品名品名品名品名品名品名品名品名品名品名品名
                  </h5>
                  <p className="SellerProduct__article">作者作者作者作者</p>
                  <p className="SellerProduct__price">$16900</p>
                </div>
              </td>
            </tr>
          </table>
        </main>
      </section>
    </div>,
    document.getElementById('sellerhome__main')
  )
}

function SellerOrder(params) {
  ReactDOM.render(
    <div>
      SellerOrder
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
        <table>
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
              <th>
                <Button
                  className=""
                  variant="--color-bg"
                  style={{ border: 'none' }}
                >
                  售出數量
                  <TiArrowSortedDown />
                </Button>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td>1</td>
              <td>
                <Button variant="dark">詳細資料</Button>
              </td>
            </tr>
            <tr>
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td>1</td>
              <td>
                <Button variant="dark">詳細資料</Button>
              </td>
            </tr>{' '}
            <tr>
              <td>0000000000000000000000</td>
              <td>未出貨</td>
              <td>2000</td>
              <td>2023/01/14</td>
              <td>1</td>
              <td>
                <Button variant="dark">詳細資料</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.getElementById('sellerhome__main')
  )
}

export { SellerFrontPage, SellerPage, SellerUpload, SellerProduct, SellerOrder }
