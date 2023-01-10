import React from 'react';
import './spaceBlog.css';
import space1 from '../../assets/space1.png'


const SpaceBlog = () => (
    <div id="spaceblog" className='yipai__spaceblog_container'>
      <div className='spaceimg1'>
      <div className='yipai__artistbox'>
        <img src={space1} />
        <h2 className='spacetext'>問空間</h2>
        <h4 className='spacetext'>Ask Art Space</h4>
      </div>
      </div>
      <div className='spaceimg2'></div>
    </div>
);

export default SpaceBlog;
