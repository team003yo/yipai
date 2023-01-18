import React from 'react';
import './productsDetail.css';
import 'bootstrap';
import demo from '../../assets/demo.png';
import artistLink from '../../assets/artistLink.png';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import productsId01 from '../../assets/productsId01.png';


const ProductsDetail = () =>  {

  return (
    <>
    <div className="container-fluid"  id="ProductsDetail_container_fluid">
    <section id="ProductsDetail_section">
        <hgroup id="ProductsDetail_hgroup">
          <div className="ProductsDetail_nav-wrapper d-inline" >
            <div className="ProductsDetail_d-inline">
                <h2>海報, 放輕鬆</h2>
                <h4 className='ProductsDetail_card-text'>BILD</h4>
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
              <div className='ProductsDetail_addCar '>
                  <a className="d-inline">加入購物車</a>
              </div>
          </div>
        </hgroup>

        <figure id="ProductsDetail_figure">
        <p className="ProductsDetail_page-link" ><Link to="/products">藝術品</Link>▶印象派</p>
            <Carousel className='ProductsDetail_carousel-products' showThumbs={true} showStatus={false}>               
            <img className="ProductsDetail_img-pic" src={productsId01}/>
            <img  src={productsId01} />
            </Carousel> 
        </figure>
      <article id="ProductsDetail_article">
      <div className="ProductsDetail_Detail">
        <div className="ProductsDetail_Detail-text ">
        <p className="ProductsDetail_p" align="left">這是一隻綠色的可愛樹懶。其移動速度非常地慢，只有每分鐘4米（0.24km/h）的速度，在地面上是只有每分鐘2米（0.12km/h）的速度。如果不慎掉到地面，容易成為其他肉食性動物的獵物。</p>
        </div>
        <div className="col-md-6">
            <img src= {demo} alt="" className='ProductsDetail_demoPic'/>
        </div>
      </div>
      </article>
      <aside id="ProductsDetail_aside">
      <div className="ProductsDetail_aside-wrapp">
      <div className="ProductsDetail_artistLink">
          <div className="col-md-4">
            <img src= {artistLink} className="ProductsDetail_artistPic"/>    
          </div>
          <div className="ProductsDetail_card-body">
          <div className="ProductsDetail_card-body-wrap">
            <h5 className="ProductsDetail_card-title">Yannick Aaron</h5>
              <p className="ProductsDetail_card-text">French</p>
              <p className="ProductsDetail_Detail-text">
              <p className='ProductsDetail_p' align="left">我是林容德，84年次，出生於嘉義縣水上鄉。父親任職於新營長榮鋼鐵品管課課長，母親為財團法人嘉義北回文化藝術基金會董事長助理，我的哥哥畢業於國立交通大學，目前在桃園星宇航空總部工作</p>
              </p>
              <button className='ProductsDetail_follow' >關注</button>
          </div>
          </div>
      </div>
      </div>
      </aside>  
    </section>
    <main id="ProductsDetail_main">
      <div className='ProductsDetail_main-wrap'>
     <h3 className='fw-bold ProductsDetail_more'>這個藝術家的其他商品</h3>
                <table className="ProductsDetail_other-product">  
                      <tr className="ProductsDetail_card-pic ProductsDetail_pic1" >
                      <td>
                        <img className='ProductsDetail_pic-img' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvODA0ODM1X2JkNWY4MDlhNmUwZjFiMzQ2ODQzNjlkYTkyNzdjM2U0LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=4de31b7ee197e656160452397ab3fac1148ae59c0e210b85c3fbd765a2a406cc"/>
                        <div className="ProductsDetail__card-text">
                        <h6 className='ProductsDetail_productId'>Imagine</h6> 
                        <p className="ProductsDetail_price">$190200</p>
                        </div>
                      </td>
                      </tr> 
                      <tr className="ProductsDetail_card-pic ProductsDetail_pic2" >
                      <td><img className='ProductsDetail_pic-img' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvOTkyNTkzXzU4NDMxZGRlOTM3ZDEzZTBjNWZlNWZkNDVhOGY3NWJmLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjc1MCwiaGVpZ2h0Ijo3NTAsImZpdCI6Imluc2lkZSJ9LCJ0b0Zvcm1hdCI6IndlYnAiLCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19?signature=0900fb339dc79cec9f9caed2d0f6927e2efcbe7900face96077b85fb8896a3ba"/>
                        <div className="ProductsDetail__card-text">
                        <h6 className='ProductsDetail_productId'>Harmony</h6> 
                        <p className="ProductsDetail_price">$1174200</p>
                        </div>
                      </td>
                       </tr> 
                       <tr className="ProductsDetail_card-pic ProductsDetail_pic3" >
                       
                       <td><img className='ProductsDetail_pic-img' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI2N185OGJlNGM3ZGZlNGE5YzM2ZjBiOGNjN2RmMGQyOTEyNy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=9a6c5126fe70659edb1b155cf024c7316ba6bce3d25fa3eb76876357b9fe9323"/>
                        <div className="ProductsDetail__card-text">
                        <h6 className='ProductsDetail_productId'>Der Stubenhocker</h6>
                     
                        <p className="ProductsDetail_price">$16900</p>
                        </div>
                      </td>
                       </tr> 
                      <tr className="ProductsDetail_card-pic ProductsDetail_pic4" >
                       
                      <td><img className='ProductsDetail_pic-img' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI0M18wZmE0MDJlNmNhZmEzNTIwYTNhNmRjYWU1NWI5ZGIyZC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=3a70517d495b44f40ea52dccb98343482c306316c66ce46d4399093861508fac"/>
                        <div className="ProductsDetail__card-text">
                        <h6 className='ProductsDetail_productId'>The sky</h6>
                       
                        <p className="ProductsDetail_price">$16900</p>
                        </div>
                      </td>
                      </tr> 
                      
                      <tr className="ProductsDetail_card-pic ProductsDetail_pic5" >
                      
                        <td><img className='ProductsDetail_pic-img' src="https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiYXJ0d29ya3NcL3YyXC9jcm9wcGVkXC8yMzU5M1wvbWFpblwvem9vbVwvMTA3NTI2NV9hMDY2ZDUzMjNmYjc3ZGM3ZDY0ZmNhMmIzNDVmNGY3Zi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwLCJmaXQiOiJpbnNpZGUifSwidG9Gb3JtYXQiOiJ3ZWJwIiwid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4fba5bade6fe9c199c9d6dff1fb28852e85900d2fd130ad03dfcbb96dff40d3f"/>
                        <div className="ProductsDetail__card-text">
                        <h6 className='ProductsDetail_productId'>River</h6>
                        
                        <p className="ProductsDetail_price">$16900</p>
                        </div>
                        </td>
                      </tr> 
                  </table>
                  </div>
        </main>
   
    </div>

    
        <div className='ProductsDetail_addCar-bottom'>
            <a className="d-inline">加入購物車</a>
        </div>
        

</>

    );
};


export default ProductsDetail;