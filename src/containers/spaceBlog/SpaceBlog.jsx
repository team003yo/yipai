import React from 'react';
import './spaceBlog.css';
import space1 from '../../assets/space1.png'


const SpaceBlog = () => (
    <div id="spaceblog" className='yipai__spaceblog_container'>
        <div className='spaceblog'>
          <div className='spacebox'>
            <img alt="first" src={space1} />
            <h2 className='spacetext'>
            問空間 Ask Art Space
            </h2>
            <button className='button-style'>立刻探索</button>
            </div>
          <div className='spacebox'>
            <img alt="first" src={space1} />
            <h2 className='spacetext'>
            問空間 Ask Art Space
            </h2>
          <button className='button-style'>立刻探索</button>
          </div>
        
        </div>
    </div>
);

export default SpaceBlog;
