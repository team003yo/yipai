import React from 'react';
import art1 from '../../assets/art1.png'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import './productsblog.css';

const Productsblog = () => (
  <div className='product_body'>
    <div className='flex-col'>
      <div className='bigimg'><img src={art1} /></div>
      <div className='yipai__title-text'>
        <div id='productsblog' className='products_grid'>
          <div className='yipai__artistbox'><img src={pic2} /></div>
          <div className='yipai__artistbox'><img src={pic3} /></div>
          <div className='yipai__artistbox'><img src={pic4} /></div>
        </div>
      </div>
    </div>

  </div>
  
);

export default Productsblog;
