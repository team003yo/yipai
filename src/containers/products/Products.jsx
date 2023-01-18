// import React from 'react'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import './products.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsId01  from '../../assets/productsId01.png';
import  ProductsSize_Slider from './ProductsSize_Slider';
import ProductsPrice_Slider from './ProductsPrice_Slider';
import Pagination from 'react-bootstrap/Pagination';
import { BiRectangle } from "react-icons/bi" ;
import { TbRectangleVertical,TbRectangle } from "react-icons/tb";
import { margin } from '@mui/system';



const Products = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
            <th><h3 className='Products＿size-h3'>藝術品分類</h3></th>
            <tr>
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg " style={{border:"none"}} id="dropdown-basic" className='ms-5'>
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
            <Dropdown.Toggle variant="--color-bg" style={{border:"none"}} id="dropdown-basic"  className='ms-5'>
              依風格
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">所有(2000)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">印象派(20)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">幾何(20)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">復古(20)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">超現實(20)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">水彩(20)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">表現主義(20)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </tr>
            <h6 className='Products＿size-h5'>依色系</h6>
            <tr className='Products＿slider-color'>
              <table >
               <tr>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-red'></div></td>
                <td><div className='Products＿slider-color-item Products＿slider-color-item-ori'></div></td>
                <td><div className='Products＿slider-color-item Products＿slider-color-item-yel'></div></td>
                <td><div className='Products＿slider-color-item Products＿slider-color-item-gre'></div></td>
               </tr>
               <tr>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-blu'></div></td>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-pur'></div></td>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-bro'></div></td>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-whi'></div></td>
               </tr>
               <tr>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-gra'></div></td>
                <td ><div className='Products＿slider-color-item Products＿slider-color-item-bla'></div></td>
               </tr>
              </table>
            </tr>
            <h6 className='Products＿size-h5'>形狀</h6>
            <tr className='Products＿slider-shape'>  
            <BiRectangle style={{width:"40px", height:"40px"}}/>
            <TbRectangleVertical style={{width:"40px", height:"40px"}}/>
            <TbRectangle style={{width:"40px", height:"40px"}}/>
            </tr>
            <h5 className='Products＿size-h5'>依尺寸(CM)</h5>
            <h6 className='Products＿slider-color-size-h6'>長邊</h6> 
            <tr className='Products＿slider-size'>               
            <ProductsSize_Slider>
            </ProductsSize_Slider>
            </tr>
            <h5 className='Products＿slider-color-size-h6'>短邊</h5>
            <tr className='Products＿slider-size'> 
            <ProductsSize_Slider>
            </ProductsSize_Slider>
            </tr>
            <h5 className='Products＿size-h5'>金額篩選</h5>
            <tr className='Products＿slider-price'>
            <ProductsPrice_Slider>
            </ProductsPrice_Slider>
            </tr>
            <tr>
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg" style={{border:"none"}} id="dropdown-basic"  className='ms-5'>
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
          <h3 className='Products＿nav__h3 ' align="left">所有藝術品</h3>
            <div className='Products＿nav-wrapp'>
              <div className="Products＿link-bar d-flex">
              <p className='Products＿link'><Link to="/">首頁</Link>▶所有藝術品</p>
              </div>
            </div>          
           {/* <button className="Products＿button" variant="dark"> 
                由新至舊
           </button> */}
          </nav>
          <figure id="Products__figure">
            
           <div className='Products__figure-wrap'>
              
                         
                        <div classMame="Products__img-id-wrap">
                        <Link to="./ProductsDetail">
                        <img className="Products__card-img-top" src={productsId01} />
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>

                        <div className="Products__img-id-wrap">
                      <Link to="./ProductsDetail"> 
                        <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xOTQxNVwvbWFpblwvem9vbVwvODg3OTQxXzYwNzNhNjU4MzcyZTFiNTY2MzVlNTVlZDRhZjBlNTFmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=afb4f906096d0f37c64b83457e1f8c52b3b75c6f0494b03efa5684e8356086cc" />
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>
                       
                     
 
               
                        <div className="Products__img-id-wrap">
                      <Link to="./ProductsDetail">     
                        <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMDgwMVwvbWFpblwvem9vbVwvMTQzOTc5NV85YTU0YjcyZDE0YzdiOTM4MGI2YzFhMWU4OGY2M2UyYS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3354b764d2ecd526da29327b4a7fd33227b4909b8ea40e6d6c5e46f2700d84b9" />
                     
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>
                       
                    
        
                        <div className="Products__img-id-wrap">
                      <Link to="ProductsDetail">
                        <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMjA5XC9tYWluXC96b29tXC85MDAwOTVfN2FhZWM3ZDc0Mjg0ZDQ1NzgxYWVjOTRhNGE5MzQyY2EuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=601f8e5811c653113228a4b0130e66339661804a70b61950cbf718d21e80ffdc"  />
                      
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>
                       
                  

                
                        <div className="Products__img-id-wrap">
                       <Link to="ProductsDetail">
                         <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zNTgxXC9tYWluXC96b29tXC8xNTYwOTUxXzg2OTc4NDdlZGMxYTFkYTRkNWI0MjBmMGJmODRkYTE4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=3184d193bc65a277ee96adca24c4d8d2ef3d3f80ad1b6d8e0a042d86e5cc2953"/>

                      
                         <h5 className='Products__productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                         <p className='Products__article' >作者作者作者作者</p>
                         <p className="Products__price">$16900</p>
                         </Link>
                         </div>
                      

                         <div className="Products__img-id-wrap">              
                        <Link to="ProductsDetail">
                         
                        <img className="Products__card-img-top" src="https://cdn.singulart.com/artworks/v2/cropped/23911/main/zoom/1592667_3c62c3c91391f5615033b528f97ad634.jpeg" />
                        
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>
                       
                     
                
                        <div className="Products__img-id-wrap">
                      <Link to="ProductsDetail">
                        <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3BpY3R1cmVzXC9jcm9wcGVkXC82OTNcLzY5MDFcL3pvb21cL3NlcmllXzY5MDFfOGJmOGNhNTJjYjkwYzQyYWMwMDBlNTMxNTNhMjZlYWIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjc1MCwiZml0IjoiaW5zaWRlIn0sInRvRm9ybWF0Ijoid2VicCIsIndlYnAiOnsicXVhbGl0eSI6ODB9fX0=?signature=18e0bbaeb9a2bcbbd3d127e530c475f3950d9560c78d52329415c0193159b38e"  />
                       
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                        </Link>
                        </div>
                       
                     
           
           
                   
                        <div className="Products__img-id-wrap">       
                        <Link to="ProductsDetail"> 
                        <img className="Products__card-img-top" src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xNjAwM1wvbWFpblwvem9vbVwvMTc2MTUwMV9kYmI0M2I5MGYwNGU0NGUzMzQwOGZkZWVmMTE2ZjQ0My5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=f62f7c40419c52992cc0f234f3e884557b64e56ea041109fe2bf577e552018b4" />
                       
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                       
                        </Link>
                        </div>
              
               
                        <div className="Products__img-id-wrap">                            
                        <Link to="ProductsDetail">
                        <img className="Products__card-img-top" src="https://pbs.twimg.com/media/Exfe8tnVIAMjjzu?format=jpg&name=large" />
                       
                        <h5 className='Products__productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h5>
                        <p className='Products__article' >作者作者作者作者</p>
                        <p className="Products__price">$16900</p>
                     
                        </Link>
                        </div>
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
 );
};

export default Products