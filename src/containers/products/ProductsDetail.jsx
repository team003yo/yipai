import React from 'react';
import './productsDetail.css';
import 'bootstrap';
import Button from 'react-bootstrap/Button';
import demo from '../../assets/demo.png';
import artistLink from '../../assets/artistLink.png';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import productsId01 from '../../assets/productsId01.png';


const ProductsDetail = () =>  {

  return (
    <>
<div>
    <div className="container-fluid">
    <section id="ProductsDetail">
        <hgroup>
          <div className="nav-wrapper d-inline" >
            <div className="d-inline">
                <h2>海報, 放輕鬆</h2>
                <h4 className='card-text'>BILD</h4>
                <h4>荷蘭</h4>
            </div>   
             
              <table className='table table-borderless'>
              <thead>
              <tr>
                <th scope="col">媒介</th>
                <th scope="col">風格</th>
                <th scope="col">年份</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>電繪</td>
                <td>印象派</td>
                <td>2022</td>
              </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">尺寸</th>
                  <th scope="col">色系</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>尺寸(CM)</td>
                  <td>色系</td>
                </tr>
              </tbody>
              </table>
              <div className='addCar '>
                  <a className="d-inline">加入購物車</a>
              </div>
          </div>
        </hgroup>

        <figure>
        <p className="page-link" ><Link to="/Products">藝術品</Link>▶印象派</p>
            <Carousel className='carousel-products' showThumbs={true} showStatus={false}>               
            <img  src={productsId01} alt="productsId01"/>
            <img  src={productsId01} />
            </Carousel> 
        </figure>
      <article>
      <div className="Detail ">
        <div className="Detail-text ">
        <p align="left">這是一隻綠色的可愛樹懶。其移動速度非常地慢，只有每分鐘4米（0.24km/h）的速度，在地面上是只有每分鐘2米（0.12km/h）的速度。如果不慎掉到地面，容易成為其他肉食性動物的獵物。</p>
        </div>
        <div className="col-md-6 ">
            <img src= {demo} alt="" className='demoPic'/>
        </div>
      </div>
   
      </article>
      <aside>
      <div className="aside-wrapp">
      <div className="artistLink">
          <div className="col-md-4">
            <img src= {artistLink} className="artistPic"/>    
          </div>
          <div className="card-body">
          <div className="card-body-wrap">
            <h5 className="card-title">Yannick Aaron</h5>
              <p className="card-text">French</p>
              <p className="card-text"></p>
              <p>我是林容德，84年次，出生於嘉義縣水上鄉。父親任職於新營長榮鋼鐵品管課課長，母親為財團法人嘉義北回文化藝術基金會董事長助理，我的哥哥畢業於國立交通大學，目前在桃園星宇航空總部工作</p>
              <button className='products-button'>關注</button>
          </div>
          </div>
      </div>
      </div>
      </aside>
       
    </section>
    </div>
    <main className='ProductsDetail-main'>
    <h3 className='fw-bold more d-flex'>這個藝術家的其他商品</h3>
    <div className='other-wrapp '>
              <div className="otherLink" >
                  {/* <img className='otherProducts' src={productsId01} /> */}
                  <div className="other-product">  
                      <div className="card-pic pic1" >
                        <img src={productsId01} className="card-img-top" />
                        <h6 className='productId' >品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      <div className="card-pic pic2" >
                        <img src={productsId01} className="card-img-top" />
                        <h6 className='productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      <div className="card-pic pic3" >
                        <img src={productsId01} className="card-img-top" />
                        <h6 className='productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      <div className="card-pic pic4" >
                        <img src={productsId01} className="card-img-top" />
                        <h6 className='productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      
                      <div className="card-pic pic5" >
                        <img  src={productsId01} className="card-img-top" />
                        <h6 className='productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      <div className="card-pic pic6" >
                        <img src={productsId01} className="card-img-top " />
                        <h6 className='productId'>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <p>$16900</p>
                      </div> 
                      {/* <div className="card-pic" >
                        <img src={productsId01} className="card-img-top" />
                        <h6 >品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <a href="#" className=" d-flex">$ <p>16900</p></a>
                        </div>
                        

                        <div className="card-pic" >
                        <img src={productsId01} className="card-img-top" alt="..."/>
                        <h6>品名品名品名品名品名品名品名品名品名品名品名品名</h6>
                        <p className='article' >作者作者作者作者</p>
                        <a href="#" className=" d-flex">$ <p>16900</p></a>
                        </div> */}
                  </div>
              </div>
        </div>
        </main>
        <div className='addCar-botton'>
            <a className="d-inline">加入購物車</a>
        </div>
        
</div>
</>

    );
};


export default ProductsDetail;