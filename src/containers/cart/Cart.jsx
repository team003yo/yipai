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

    <Table striped bordered hover className='table-color margin-top-30'>
      <thead>
        <tr>
          <th>刪除商品</th>
          <th>商品名稱</th>
          <th>商品資訊</th>
          <th>數量</th>
          <th>價格</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody className='line-height-50'>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td colSpan={2}>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>

  </div>
    
  )
}
;

export default Cart;
