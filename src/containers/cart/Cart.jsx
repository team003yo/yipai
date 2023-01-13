import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { RiCloseCircleFill } from 'react-icons/ri'
import { Table } from 'react-bootstrap';
import productsId01  from '../../assets/productsId01.png';
import './cart.css';
import pic5 from '../../assets/pic5.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'


const Cart = () => {
  return(
  <div className='font-family margin-50'>
    <Link to='/products' className='keepbuying-button'>❮ 繼續購物</Link>
    <div className='flex-text margin-top-30'>
      <h2>
      <BsCartFill className="iconStyle-title" />
        我的購物車</h2>
      <h5 className='' >1.我的購物車 <span className='color-gray'>▶ 2.付款資訊 ▶ 3.訂單成立</span></h5>
    </div>
    <div className='dis-re'>
    <Table striped hover className='table-color margin-top-30 tables-text-size'>
      <thead>
        <tr>
          <th className='col text-center'>刪除</th>
          <th className="text-center">預覽</th>
          <th className="text-center">名稱</th>
          <th className='text-right'>數量</th>
          <th className='text-right'>價格</th>
        </tr>
      </thead>
      <tbody className='line-height-50 text-right'>
        <tr>
          <td className="text-center"><RiCloseCircleFill className='close-icons' /></td>
          <td className='table-prodcuts'><img src={productsId01} alt='img'/></td>
          <td className='text-center '>Mark</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        <tr>
          <td className="text-center"><RiCloseCircleFill className='close-icons' /></td>
          <td className='table-prodcuts'><img src={productsId01} alt='img'/></td>
          <td className='text-center'>Jacob</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        <tr className='text-a'>
          <td className="text-center"><RiCloseCircleFill className='close-icons' /></td>
          <td className='table-prodcuts'><img src={productsId01} alt='img'/></td>
          <td className='text-center'>YOYO</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
    <hr />
    <h4 className='cart__h4'>您可能會喜歡 :</h4>
    <div className='cart__products'>
      <Carousel className='cart__products-carousel' autoPlay showThumbs={false}  showStatus={false}>
      <div>
        <img alt="first" src={pic5} />
      </div>
      <div>
        <img alt="first" src={pic3} />
        {/* <p className="legend">畫廊</p> */}
      </div>
      <div>
        <img alt="first" src={pic4} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
  </Carousel>
      <Carousel className='cart__products-carousel' autoPlay showThumbs={false}  showStatus={false}>
      <div>
        <img alt="first" src={pic5} />
        {/* <p className="legend">畫廊</p> */}
      </div>
      <div>
        <img alt="first" src={pic3} />
        {/* <p className="legend">畫廊</p> */}
      </div>
      <div>
        <img alt="first" src={pic4} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
  </Carousel>
      <Carousel autoPlay className='cart__display-none cart__products-carousel'  showThumbs={false}  showStatus={false}>
      <div>
        <img alt="first" src={pic5} />
        {/* <p className="legend">畫廊</p> */}
      </div>
      <div>
        <img alt="first" src={pic3} />
        {/* <p className="legend">畫廊</p> */}
      </div>
      <div>
        <img alt="first" src={pic4} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
  </Carousel>


    </div>
    

    <footer class="footer-floor1">   
        <div>
          <a href="#news">結帳資訊</a>
        </div>    
        <div>
          <a href="#contact">優惠券 : {0}</a>
          <a href="#contact">總數 : {2}</a>
          <a href="#contact">運費 : ${0}</a> 
        </div>    
     
    </footer>
    <footer class="footer-floor2">

        <a href='#total'>購物車總計 : {200}</a>
        <Link to="page2"><button>前往結帳頁面</button></Link>
    </footer>
    
    
    
    </div>
  </div>
    
  )
}
;

export default Cart;
