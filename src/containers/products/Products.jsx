// import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './products.css'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductsSize_Slider from './ProductsSize_Slider'
import ProductsPrice_Slider from './ProductsPrice_Slider'
import Pagination from 'react-bootstrap/Pagination'
import { BiRectangle } from 'react-icons/bi'
import { TbRectangleVertical, TbRectangle } from 'react-icons/tb'
import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Products  ()  {
  // 為了處理網址
  let navigate = useNavigate();
  const { currentPage } = useParams();
  const [page, setPage] = useState(parseInt(currentPage, 10) || 1); // 目前在哪一頁
  const [totalPage, setTotalPage] = useState(); // 總共有幾頁

  const [products, setProducts] = useState([]);

  //product初始值
  const [originalProduct, setOriginalProduct] = useState([]);
  //select顯示在頁面的值
  const [selectedMaterial, setSelectedMaterial] = useState('');


  useEffect(()=>{
    console.log('空陣列的 useEffect');
  },[]);

  useEffect(() => {
    console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProducts() {
      let response = await axios.get(`http://localhost:3001/product?page=${page}`);
      setProducts(response.data.data);
      console.log(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    }
    getProducts();
  }, [page]);

  //清除鍵
  const handleClear = () => {
    //清空初始值
    setProduct(originalProduct);
    console.log(originalProduct);
    //清空媒材
    setSelectedMaterial('');
  }

  
  const getPages = () => {
    let pages = [];
  
    // 顯示「上一頁」
    if (page > 1) {
      pages.push(
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            backgroundColor: 'black',
            borderColor: '#dbdbdb',
            color: '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
          key={-1}
          onClick={(e) => {
            setPage(page - 1);
            navigate(`/products?page=${page - 1}`);
          }}
        >
          {'<'}
        </li>
      );
    }
  
    // 顯示頁碼
    for (let i = 1; i <= 5; i++) {
      pages.push(
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            backgroundColor: 'black',
            borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            color: page === i ? '#fff' : '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
          key={i}
          onClick={(e) => {
            setPage(i);
            navigate(`/products?page=${i}`);
          }}
        >
          {i}
        </li>
      );
    }
  
    // 顯示「下一頁」
    if (page < totalPage) {
      pages.push(
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            backgroundColor: 'black',
            borderColor: '#dbdbdb',
            color: '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
          key={-2}
          onClick={(e) => {
            setPage(page + 1);
            navigate(`/products?page=${page + 1}`);
          }}
        >
          {'>'}
        </li>
      );
    }
  
    return pages;
  };


  return (
    <>
      <header id="Products__header">
        <div className="Products__banner">
          <div className="Products__banner__img"></div>
        </div>
      </header>
      <div className="container-fluid" id="Products＿container-fluid">
        <section id="Products__section">
        
          <aside id="Products__aside">
          
            <table className="Products＿aside-content-center">
            
              <th>
                <h3 className="Products＿size-h3">藝術品分類</h3>
                
              </th>
              <tr>
              <Button className="Products＿filter＿clear" variant="dark" >Clear</Button>
              </tr>

              <tr>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg "
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    依媒材
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">所有(2000)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">油彩(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">拼貼(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">油畫(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">雕塑(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">水彩(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">電繪(20)</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <tr>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg"
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    依風格
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">所有(2000)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">印象派(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">幾何(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">復古(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">超現實(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">水彩(20)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      表現主義(20)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
              <h6 className="Products＿size-h5">依色系</h6>
              <tr className="Products＿slider-color">
                <table>
                  <tr>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-red"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-ori"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-yel"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-gre"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-blu"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-pur"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-bro"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-whi"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-gra"></div>
                    </td>
                    <td>
                      <div className="Products＿slider-color-item Products＿slider-color-item-bla"></div>
                    </td>
                  </tr>
                </table>
              </tr>
              {/* <h6 className="Products＿size-h5">形狀</h6>
              <tr className="Products＿slider-shape">
                <BiRectangle style={{ width: '40px', height: '40px' }} />
                <TbRectangleVertical
                  style={{ width: '40px', height: '40px' }}
                />
                <TbRectangle style={{ width: '40px', height: '40px' }} />
              </tr> */}
              <h5 className="Products＿size-h5">依尺寸(CM)</h5>
              <h6 className="Products＿slider-color-size-h6">長邊</h6>
              <tr className="Products＿slider-size">
                <ProductsSize_Slider></ProductsSize_Slider>
              </tr>
              <h5 className="Products＿slider-color-size-h6">短邊</h5>
              <tr className="Products＿slider-size">
                <ProductsSize_Slider></ProductsSize_Slider>
              </tr>
              <h5 className="Products＿size-h5">金額篩選</h5>
              <tr className="Products＿slider-price">
                <ProductsPrice_Slider></ProductsPrice_Slider>
              </tr>
              <tr>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg"
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="ms-5"
                  >
                    創作年份
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">升冪</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">降冪</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </tr>
            </table>
          </aside>
          <nav id="Products＿nav">
            <h2 className="Products＿nav__h3 " align="left">
              所有藝術品
            </h2>
           
            <div className="Products＿nav-wrapp">
              <div className="Products＿link-bar d-flex">
                <p className="Products＿link">
                  <Link to="/">首頁</Link>▶所有藝術品
                </p>
              </div>
            </div>
            {/* <button className="Products＿button" variant="dark"> 
                由新至舊
           </button> */}
          </nav>
          <figure id="Products__figure">
         
         
            <div className="Products__figure-wrap">
              {product.map((product, index) => {
                return (
                  
                  <div key={product.id} classMame="Products__img-id-wrap">
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="Products__card-img-top"
                        src={product.img_file}
                      />
                      <h4 className="Products__productId">{product.name}</h4>
                      <p className="Products__material mb-0">{product.material}<span className='ms-2'>{product.creation_year}</span></p>
                      <p className="Products__article">{product.artist}</p>
                      <h5 className="Products__price">${product.price}</h5>
                    </Link>
                  </div>
                )
              })}
            </div>
          </figure>
          <footer id="Products__footer">
              <div className="Products__footer_page">
              <ul>{getPages()}</ul>
             </div>
          </footer>
        </section>
      </div>
    </>
  )
}

export default Products
