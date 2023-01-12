// import React from 'react'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import './products.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productsId01 } from './imports';
// import { Button } from 'react-bootstrap';

const Products = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div>
      <header>
        <div class="banner">
          <div class="bannerImg"></div>
        </div>
      </header>

      <div class="container-fluid">
       <section id="Products">
        <aside>
          <div class="aside-content">
            <h6 className='d-block'>藝術品分類</h6>
            <hr />
          <div className="yipai__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="yipai__navbar-menu_container scale-up-center">
            <div className="yipai__navbar-menu_container-links">
              <p>
                <Link to="/">展覽活動</Link>
              </p>
              <p>
                <Link to="space">展覽空間</Link>
              </p>
              <p>
                <Link to="products">藝術品</Link>
              </p>
              <p>
                <Link to="artist">藝術家</Link>
              </p>
              <p>
                <Link to="about">關於我們</Link>
              </p>
            </div>
          </div>
        )}
      </div>  
             <Dropdown>
              <Dropdown.Toggle variant="dark">
                依種類
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">北</Dropdown.Item>
                <Dropdown.Item href="#/action-2">中</Dropdown.Item>
                <Dropdown.Item href="#/action-3">南</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="dark" >
                依風格
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">假日</Dropdown.Item>
                <Dropdown.Item href="#/action-2">平日</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 
            <div className='size'>
            <h6 className='d-block'>依尺寸</h6>
            </div>
            <div className='size'>
            <h6 className='d-block'>依形狀</h6>
            </div>
            <div className='size'>
            <h6 className='d-block'>依色系</h6>
            </div>
            <div className='size'>
            <h6 className='d-block'>金額篩選</h6>
            </div>
            <div className='size'>
            <h6 className='d-block'>創作年份</h6>
            </div>
            </div>
        </aside>
          <nav>
            <div className='main-wrapp'>
              <div>
            <h3 align="left">所有藝術品</h3>
              <div className="d-flex link-bar">
              <p className='link'>
              <Link to="/">首頁</Link>▶所有藝術品
              </p>
              <Button variant="dark">由新至舊</Button>
              </div>
              </div>

              </div>
          </nav>
        <main>
          <div className='main-wrapp'>
            <div className=" main-card mt-3">
              <div className="row align-items-start">
                <div className="col main-card-item">
                    <Link to="ProductsDetail">
                      <div className='ProductsName'>
                      <img src={ productsId01 }  />
                      </div>
                    <h4>海報, 放輕鬆</h4>
                    <h4 className="main-card-item-text">BILD</h4>
                    <h5>$16900</h5>
                    </Link>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvMTczOTEwMl84YzljMGViYjM4ZmZhMDNhMzVjOTA0N2UxNWY3MWY4Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=431c1dcdb4eada10533022a696498bbd0d99a937e3dc9195a294b9435819e85b" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvNjg3NzE1XzI5YTVhM2ExOWJjMGZiOTkyZjZkYzg5OTFjZWE2MzE2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=e47f0918b25b3a720141c2da398340d8b0c7c5000c524cf57c12866318eea280"/>
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvNDgyMjI5Xzk2MGMyNzViYmJkY2Q2MGViMjJmM2IxNjEwMWUzZDJhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=15b0e020d2a8f37fd816507269322a19baab249aa9a589368dc817d4c13cbd21 "/>
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvMTAzMTY1OV9mNjVlNWI3YThmMWJiNjhmMDExY2ZiOGI3Zjc1MTY1ZC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=9aa4098b2447af0b39cf88f4422b07c21cd39e8de0fcfe4459e606f3b9f33085" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvMTY2MjA3M18xNmYyNThmZjQyMjdlNWFhZDI2YTAzZDQyNjg0MGE5MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=175b3e4a4e7273bea4259aa91a8723892cc505ada214e796b915bcc916e22b53" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img className='ProductsName' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvMTQ2MTU5NV82NTc1MmEzMTFlODVlYjdiMmJjOWJkYzFlOWUxNzM5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=937ecb62c79a856a04b520dadaa90de85d67e964adf66292dc3775a0105021e5" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                
               </div>   
             </div>   
            </div>       
          </main>
          
        </section>
      </div>
      </div>
  
    </>
 );
};

export default Products