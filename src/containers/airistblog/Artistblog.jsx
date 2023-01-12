import React, { useState } from 'react';
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'
import pic7 from '../../assets/pic7.jpg'
import pic8 from '../../assets/pic8.jpg'
import pic9 from '../../assets/pic9.jpg'
import artistName from '../../assets/artist.png'
import './artistblog.css';




const ArtistBlog = () => {
  return(
    <div className='body'>
    <div id='artistblog' className='grid'>
 
      <div className='yipai__artistbox'><img src={pic1} /></div>
      <div className='yipai__artistbox'><img src={pic2} /></div>
      <div className='yipai__artistbox'><img src={pic3} /></div>
      <div className='yipai__artistbox'><img src={pic4} /></div>
      <div className='yipai__artistbox'><img src={pic5} /></div>
      <div className='yipai__artistbox'><img src={pic6} /></div>
      <div className='yipai__artistbox'><img src={pic7} /></div>
      <div className='yipai__artistbox'><img src={pic8} /></div>
      <div className='yipai__artistbox'><img src={pic9} /></div>
    </div>
  </div>
  );
}
 

export default ArtistBlog;
