// import React from 'react'
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import './products.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import productsId01  from '../../assets/productsId01.png';
// import { Button } from 'react-bootstrap';

const Products = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div>
    <header>
        <div class="Products-banner">
          <div class="ProductsbannerImg"></div>
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
          <nav className='Products-nav'>
          <h3 align="left">所有藝術品</h3>
            <div className='Products-nav-wrapp'>
              <div className="Products-link-bar">
              <p className='link'><Link to="/">首頁</Link>▶所有藝術品</p>
              <Button variant="dark">由新至舊</Button>
              </div>
              </div>          
          </nav>
        <main className='Products-main'>
          <div className='Products-item-main-wrapp '>
            <div className=" Products-item-main-card">
              <div className=" Products-item-row  d-flex ">

                <div className="col Products-main-card-item">
               
                    <Link to="ProductsDetail">    
                    <div className="ProductsName">             
                    <img className='ProductsNamepic' src={ productsId01 }  />
                    </div>
                    <div className="ProductsName-text">
                    <h5>海報, 放輕鬆</h5>
                    <p className="Products-main-card-item-text">BILD</p>
                    <h4>$16900</h4>
                    </div>
                    </Link>
                    
                </div>
                <div className="col Products-main-card-item">
                <div className="ProductsName">
                  <img className='ProductsNamepic' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvNjg3NjczX2ZmYzEyMWVlMjBmMWFiYTEzZDgzNzIzNWMxY2ViZDdjLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=7cc6019fb63b2d43bd3e1c1f727561e375eb6f92e741f3a892d5e56f4dfd7eb5" />
                  </div>
                  <div className="ProductsName-text">
                  <h5>La balle</h5>
                  <p className="Products-main-card-item-text">JEAN PAUL COURCHIA</p>
                  <h4>$16900</h4>
                  </div>
              
                </div>
                <div className="col Products-main-card-item">
                
                      <Link to="ProductsDetail">    
                      <div className="ProductsName">             
                      <img className='ProductsNamepic' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8xMTIzNVwvbWFpblwvem9vbVwvMTczOTEwMl84YzljMGViYjM4ZmZhMDNhMzVjOTA0N2UxNWY3MWY4Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=431c1dcdb4eada10533022a696498bbd0d99a937e3dc9195a294b9435819e85b"  />
                      </div>
                      <div className="ProductsName-text">
                      <h5>CITRONS ET RAYURES</h5>
                      <p className="Products-main-card-item-text">JEAN PAUL COURCHIA</p>
                      <h4>$16900</h4>
                      </div>
                      </Link>
                      </div>
                      </div>
                <div className=" Products-item-row  d-flex ">
                <div  className="col Products-main-card-item">

                    <Link to="ProductsDetail">    
                    <div className="ProductsName">             
                    <img className='ProductsNamepic' src={ productsId01 }  />
                    </div>
                    <div className="ProductsName-text">
                    <h5>海報, 放輕鬆</h5>
                    <p className="Products-main-card-item-text">BILD</p>
                    <h4>$16900</h4>
                    </div>
                    </Link>

                </div>
                <div className="col Products-main-card-item">
                <div className="ProductsName">
                  <img className='ProductsNamepic' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8zMzA1N1wvbWFpblwvem9vbVwvMTUwMDU1M18wMzBlMGQ0MzQzZjBiZTQ0MmI2MWM0M2I2NWQyMDhmOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3d47e5a89c802f7ef46f8fbc04de6e3e17861622c717371e9f8b4352e8400b2d" />
                  </div>
                  <div className="ProductsName-text">
                  <h5>La balle</h5>
                  <p className="Products-main-card-item-text">JEAN PAUL COURCHIA</p>
                  <h4>$16900</h4>
                  </div>
                </div>
                <div className="col Products-main-card-item">

                      <Link to="ProductsDetail">    
                      <div className="ProductsName">        
                      <img className='ProductsNamepic' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMjU1MVwvbWFpblwvem9vbVwvNzQzMjQ5X2Q4N2JkMjE5OTZiNWNhOWY5YmY3M2Y2OGUxNjljNTQ0LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=f9500b7a1e4141194b4bc1073cb5676686d251112954b9f4e7afd6c16233249b"  />
                      </div>
                      <div className="ProductsName-text">
                      <h5>KALIGHAAT</h5>
                      <small className="Products-main-card-item-text">Anukta Mukherjee Ghosh</small>
                      <h4>$16900</h4>
                      </div>
                      </Link>
                      </div>
                      </div>
                      </div>
                      </div>       
                    </main>
                        <footer className='Products-footer'>
                        Products-footer
                        </footer>
          </section>
      </div>
      </div>
  
    </>
 );
};

export default Products