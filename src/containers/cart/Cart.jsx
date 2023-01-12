import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill, BsCartFill } from 'react-icons/bs';
import { Table } from 'react-bootstrap';

import './cart.css';


const Cart = () => {
  return(
  <div className='font-family margin-50'>
    <Link to='/products' className='keepbuying-button '>❮ 繼續購物</Link>
    <div className='flex-text margin-top-30'>
      <h1>
      <BsCartFill className="iconStyle-title" />
        我的購物車</h1>
      <h5 className='' >1.我的購物車 2.付款資訊 3.訂單成立</h5>
    </div>
    <div className='dis-re'>
    <Table striped hover className='table-color margin-top-30 '>
      <thead>
        <tr>
          <th className='col'>刪除</th>
          <th>名稱</th>
          <th>數量</th>
          <th>價格</th>
        </tr>
      </thead>
      <tbody className='line-height-50'>
        <tr>
          <td>X</td>
          <td>Mark</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        <tr>
          <td>X</td>
          <td>Jacob</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        <tr className='text-a'>
          <td>X</td>
          <td>YOYO</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
      </tbody>
    </Table>
    <hr />
    <footer class="footer-floor1">       
          <a href="#news">結帳資訊</a>
          <a href="#contact">優惠券 : {0}</a>
          <a href="#contact">總數 : {2}</a>
          <a href="#contact">運費 : ${0}</a>
          
          
    </footer>
    <footer class="footer-floor2">

        <a href='#total'>購物車總計 : {200}</a>
        <Link to="page2"><button>結帳</button></Link>
    </footer>
    
    
    
    </div>
  </div>
    
  )
}
;

export default Cart;
