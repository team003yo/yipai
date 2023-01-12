import React from 'react'
import { Link } from 'react-router-dom'
import './artist.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'


function ArtistDetail() {
  return (
    <>
      <div className="detail-img">
        <img className="aside-pic" src={require('./artistIntro.png')} alt="aside" />
        
        <div className="artist-detail-name">
          <h1 className="artist-country">France</h1>
          <h2 className="artist-name">Yannick Aaron</h2>
          <h3 className="artist-born">BORN IN 1985</h3>
        </div>
      </div>
      <div className="detail-main d-flex">
        <div className="detail-intro">
          <div className="detail-intro-text">
            <div>
              <h3 className="detail-intro-title">It's good to be the best, but it's better to be original.</h3>
            </div>
            <div>
              <h4 className="detail-intro-body" >Ynnick Aaron is a painter and draftsman based in France whose works have been exhibited nationally, as well as in Spain and China. Inspired by visions or memories that incorporate icons, his works are influenced by the pop art movement. In his artistic process, Aaron most often employs graffiti techniques using spray paint, oils, and acrylics on canvas.</h4>
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
                <Link to="#">
                  <FiShare className="share_icon" />
                  分享
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="detail-intro-img">
           <img className="detail-intro-img-body"
              src={require('./artist_self.png')}
              alt="map"              
            />
          </div>
        </div>
      </div>

    </>
  )
}
export default ArtistDetail
