// import React from 'react';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./productsDetail.css";
import "bootstrap";
import demo from "../../assets/demo.jpg";
import artistLink from "../../assets/artistLink.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// cart part
import { useCart } from "../cart/utils/useCart";

const ProductsDetail = () => {
  // cartpart
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart();

  const [productName, setProductName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLogin(true);
      } else {
        setLogin(false);
      }
      console.log(response.data[0]);
    }
    getMember2();
  }, []);

  const [UserName, setUserName] = useState([]);
  useEffect(() => {
    async function getMember2() {
      let response = await axios.get(
        `http://localhost:3001/api/members/userData`,
        {
          withCredentials: true,
        }
        );
     
      setUserName(response.data[0]);
      console.log(response.data[0]);
    }
    getMember2();
  }, []);

  const showModal = (name) => {
    setProductName("產品：" + name + "已成功加入購物車");
    handleShow();
  };
  const showModalFail = (name) => {
    setProductName("請登入!");
    handleShow();
  };

  const messageModal = (
    <Modal className="model-bg-color" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            navigate("/products", { replace: true });
          }}
        >
          繼續購物
        </Button>

        <Button
          className="btn btn-primary"
          onClick={() => {
            // 導向購物車頁面
            // props.history.push('/')
            navigate("/cart", { replace: true });
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  );
  const messageModalFalse = (
    <Modal className="model-bg-color" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車失敗</Modal.Title>
      </Modal.Header>
      <Modal.Body>XX</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            navigate("/products", { replace: true });
          }}
        >
          返回
        </Button>

        
      </Modal.Footer>
    </Modal>
  );

  const [product, setProducts] = useState([])
  //product初始值
  const [originalProduct, setOriginalProducts] = useState([])
  const [data, setData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const { productId } = useParams();
  const { artistId } = useParams();
  const [artistName, setArtistName] = useState([]);
  const [selectedImg_file, setSelectedImg_file] = useState('')

  useEffect(() => {
    // console.log('第二個參數是空陣列')
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡

    async function getData() {
      let response = await axios.get(
        `http://localhost:3001/product/${productId}?`
      );
      setData(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getArtistData() {
      let artistResponse = await axios.get('http://localhost:3001/artist');
      setArtistData(artistResponse.data);
    }
    getArtistData();
  }, []);

  console.log(artistData);
  console.log(data);
  let filtered = [...artistData];
  filtered = filtered.filter(
    (artistData) => artistData.users_name === data[0].artist
  );

  useEffect(() => {
    // console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProducts() {
      let response = await axios.get(`http://localhost:3001/product`);
      setProducts(response.data);
      console.log(response.data);
      setOriginalProducts(response.data);
    }
    getProducts();
  }, []);

//   let ProductsFiltered = [...originalProduct];
//   if (type === 'img_file') {
//     const img_file = value
//   ProductsFiltered = ProductsFiltered.filter(
//     (getProducts) =>  getProducts.artist === img_file
//   )
//   setImg_file(ProductsFiltered)
//   setSelectedImg_file(value)
//   console.log(ProductsFiltered)
//   console.log('其他作品：', value)
//  }
// });


  const display = (
    <>
      <div className="container-fluid" id="ProductsDetail_container_fluid">
        {data.map((productsDetail, index) => {
          return (
            <section id="ProductsDetail_section">
              <hgroup id="ProductsDetail_hgroup">
                <div
                  key={productsDetail.id}
                  className="ProductsDetail_nav-wrapper d-inline">
                  <div className="ProductsDetail_d-inline">
                    <h1>{productsDetail.name}</h1>
                    <h4 className="ProductsDetail_card-text">{productsDetail.artist}</h4>
                  </div>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th ><h4>媒材</h4></th>
                        <th ><h4>風格</h4></th>
                        <th ><h4>年份</h4></th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{productsDetail.material}</td>
                        <td>{productsDetail.product_style}</td> 
                        <td>{productsDetail.creation_year}</td>
                        
                      </tr>
                      </tbody>
                      <thead>
                      <tr>
                      <th scope="col"><h4>色系</h4></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <th scope="col">{productsDetail.work_hue}</th>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th scope="col"><h4>尺寸</h4></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td>寬{productsDetail.width}m</td>
                          <td>高{productsDetail.hegiht}m</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th scope="col"><h4>價格</h4></th>
                      </tr>
                    </thead>
                  
                  </table>
                  <h1  className="ProductsDetail_price_item d-flex">${productsDetail.price}</h1>
                  <div className="ProductsDetail_addCar ">
                  {login ? (<button
                      className="ProductsDetail_addCar-button d-inline"
                      onClick={() => {
                        // 商品原本無數量屬性(quantity)，要先加上
                        const item = { ...productsDetail, quantity: 1 };
                        // 注意: 重覆加入會自動+1產品數量
                        addItem(item);
                        // 呈現跳出對話盒
                        showModal(productsDetail.name);
                      }}
                    >
                      加入購物車
                    </button>):(<button
                      className="ProductsDetail_addCar-button d-inline"
                      onClick={() => {
                        // 商品原本無數量屬性(quantity)，要先加上
                        const item = { };
                        // 注意: 重覆加入會自動+1產品數量
                        removeItem(item);
                        // 呈現跳出對話盒
                        showModalFail("請登入!");
                      }}
                    >
                      加入購物車
                    </button>)}
                    
                  </div>
                </div>
              </hgroup>
              <figure id="ProductsDetail_figure">
                <p className="ProductsDetail_page-link">
                  <Link to="/products">藝術品</Link>▶{productsDetail.product_style}▶{productsDetail.material}
                </p>
                <img
                    className="ProductsDetail_img-pic"
                    src={productsDetail.img_file}
                    alt="img"
                  />
                
              </figure>
              <article id="ProductsDetail_article">
                <div className="ProductsDetail_Detail ">
                  <div className="ProductsDetail_Detail-text ">
                    <p className="ProductsDetail_p" align="left">
                      {productsDetail.detail_text}
                    </p>
                  </div>
                  <div className="col-md-6">
                  <img className="ProductsDetail_Pic" src={productsDetail.img_file}/>
                  <img src={demo} alt="" className="ProductsDetail_demobox" />
                  </div>
                </div>
              </article>
              {filtered.map((artistData, index) => {
                return(
              <aside id="ProductsDetail_aside">
                <div className="ProductsDetail_aside-wrapp">
                  <div className="ProductsDetail_artistLink">
                    <div className="col-md-4">
                      <img
                        src={artistData.user_imageHead}
                        className="ProductsDetail_artistPic"
                        alt="img"
                      />
                    </div>
                    <div className="ProductsDetail_card-body">
                      <div className="ProductsDetail_card-body-wrap">
                        <h5 className="ProductsDetail_card-title"  >
                        {artistData.users_name}
                        </h5>
                        <h5 className="ProductsDetail_card-text">{artistData.users_birth}</h5>
                        <p className="ProductsDetail_Detail-text">
                          <p className="ProductsDetail_p" align="left">
                          {artistData.users_introduce}
                          </p>
                        </p>
                        <button className="ProductsDetail_follow">關注</button>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              )
              })}
            
        <main id="ProductsDetail_main">
        {/* {ProductsFiltered.map((artistData, index) => {
                return( */}
          <div className="ProductsDetail_main-wrap">
            <h3 className="fw-bold ProductsDetail_more">
              這個藝術家的其他商品
            </h3>
            <table className="ProductsDetail_other-product">
              <tr className="ProductsDetail_card-pic ProductsDetail_pic1">
                <td>
                  <img
                    className="ProductsDetail_pic-img"
                    src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvODA0ODM1X2JkNWY4MDlhNmUwZjFiMzQ2ODQzNjlkYTkyNzdjM2U0LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=4de31b7ee197e656160452397ab3fac1148ae59c0e210b85c3fbd765a2a406cc"
                    alt=""
                  />
                  <div className="ProductsDetail__card-text">
                    <h6 className="ProductsDetail_productId">Imagine</h6>
                    <p className="ProductsDetail_price">$190200</p>
                  </div>
                </td>
              </tr>
              <tr className="ProductsDetail_card-pic ProductsDetail_pic2">
                <td>
                  <img
                    className="ProductsDetail_pic-img"
                    src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvOTkyNTkzXzU4NDMxZGRlOTM3ZDEzZTBjNWZlNWZkNDVhOGY3NWJmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=0900fb339dc79cec9f9caed2d0f6927e2efcbe7900face96077b85fb8896a3ba"
                    alt=""
                  />
                  <div className="ProductsDetail__card-text">
                    <h6 className="ProductsDetail_productId">Harmony</h6>
                    <p className="ProductsDetail_price">$1174200</p>
                  </div>
                </td>
              </tr>
              <tr className="ProductsDetail_card-pic ProductsDetail_pic3">
                <td>
                  <img
                    className="ProductsDetail_pic-img"
                    src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI2N185OGJlNGM3ZGZlNGE5YzM2ZjBiOGNjN2RmMGQyOTEyNy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=9a6c5126fe70659edb1b155cf024c7316ba6bce3d25fa3eb76876357b9fe9323"
                    alt="img"
                  />
                  <div className="ProductsDetail__card-text">
                    <h6 className="ProductsDetail_productId">
                      Der Stubenhocker
                    </h6>

                    <p className="ProductsDetail_price">$16900</p>
                  </div>
                </td>
              </tr>
              <tr className="ProductsDetail_card-pic ProductsDetail_pic4">
                <td>
                  <img
                    className="ProductsDetail_pic-img"
                    src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI0M18wZmE0MDJlNmNhZmEzNTIwYTNhNmRjYWU1NWI5ZGIyZC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3a70517d495b44f40ea52dccb98343482c306316c66ce46d4399093861508fac"
                    alt="img"
                  />
                  <div className="ProductsDetail__card-text">
                    <h6 className="ProductsDetail_productId">The sky</h6>

                    <p className="ProductsDetail_price">$16900</p>
                  </div>
                </td>
              </tr>

              <tr className="ProductsDetail_card-pic ProductsDetail_pic5">
                <td>
                  <img
                    className="ProductsDetail_pic-img"
                    src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI2NV9hMDY2ZDUzMjNmYjc3ZGM3ZDY0ZmNhMmIzNDVmNGY3Zi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4fba5bade6fe9c199c9d6dff1fb28852e85900d2fd130ad03dfcbb96dff40d3f"
                    alt="img"
                  />
                  <div className="ProductsDetail__card-text">
                    <h6 className="ProductsDetail_productId">River</h6>

                    <p className="ProductsDetail_price">$16900</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          {/* )
              })} */}
        </main>
        </section>
        );
        })}
        
      </div>

      <div className="ProductsDetail_addCar-bottom">
        <a href="#" id="add_cart" className="d-inline">
          加入購物車
        </a>
      </div>
    </>
  );
  return (
    <>
      {messageModalFalse}
      {messageModal}
      {display}
    </>
  );
};

export default ProductsDetail;