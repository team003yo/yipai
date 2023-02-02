import React from 'react'
import { Link } from 'react-router-dom'
import './artist.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
// import { FaMapMarkerAlt } from 'react-icons/fa'
// import { ImPhone } from 'react-icons/im'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArtistDetail() {
  const { artistId } = useParams();
  const [artist, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`http://localhost:3001/artist/${artistId}?`);
      setData(response.data);
      console.log(response.data);
    }
    getData();
  }, []);
  return (
    <>
    <div>
    {artist.map((users,item) => {
      return(
        <>
         <div key={users.users_id}>
         <div className="detail-img">
        <img className="artist-aside-pic" src={users.user_imagePage} alt="aside" />
          
            <div className="artist-detail-name">
              <h1 className="artist-country">{users.users_name}</h1>
              {/* <h2 className="artist-name">Yannick Aaron</h2> */}
              <h3 className="artist-born">{users.users_birth}</h3>
            </div>
            </div>
      <div className="detail-main d-flex">
        <div className="detail-intro">
          <div className="detail-intro-text">
            <div>
              <h3 className="detail-intro-title">{users.users_slogan}</h3>
            </div>
            <div>
              <h4 className="detail-intro-body" >{users.users_introduce}</h4>
            </div>            
            <br />
            <div className="icon">
              <div className="collect">
                <Link to="#">
                  <FaHeart className="FaHeart_icon" />
                  收藏
                </Link>
              </div>
              <div className="share">
                <Link Link to="#">
                  <FiShare className="share_icon" />
                  分享此藝術家
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
        
          <div className="detail-intro-img-body py-5">
           <img className="detail-intro-img"
              src={users.users_aside_picture}
              alt="artist-intro-pic"
            />
          </div>
        </div>
      </div>
              </div>
            </>
    )
    })}
      
      </div>
      
    </>
  )
}
export default ArtistDetail
