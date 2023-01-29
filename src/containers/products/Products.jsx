// import React from 'react'
import React, { useState } from 'react'
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
import { margin } from '@mui/system'
import axios from 'axios'
import { useEffect } from 'react'

const Products = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function getProduct() {
      let response = await axios.get('http://localhost:3001/product')
      setProduct(response.data)
    }
    getProduct()
  }, [])

  // const [toggleMenu, setToggleMenu] = useState(false)

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
              <h6 className="Products＿size-h5">形狀</h6>
              <tr className="Products＿slider-shape">
                <BiRectangle style={{ width: '40px', height: '40px' }} />
                <TbRectangleVertical
                  style={{ width: '40px', height: '40px' }}
                />
                <TbRectangle style={{ width: '40px', height: '40px' }} />
              </tr>
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
            <h3 className="Products＿nav__h3 " align="left">
              所有藝術品
            </h3>
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
                      <h5 className="Products__productId">{product.name}</h5>
                      <p className="Products__article">{product.artist}</p>
                      <h5 className="Products__price">${product.price}</h5>
                    </Link>
                  </div>
                )
              })}
            </div>
          </figure>
          {/* <footer id="Products__footer">
                     
                        <div>
              <Pagination className="Products__page-item justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
                        </footer> */}
        </section>
      </div>
    </>
  )
}

export default Products
