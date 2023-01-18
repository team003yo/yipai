import React from 'react'
import { Link } from 'react-router-dom'
import './spacedetail.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'

function SpaceDetail() {
  return (
    <>
      <div className="space__detail-img">
        <img className="space__aside-pic" src={require('./aside.png')} alt="aside" />
        <img className="space__aside" src={require('./aside-1.png')} alt="aside-1" />
        <div className="space__detail-name">
          <h1>問空間</h1>
          <h2>Ask Art Space</h2>
        </div>
      </div>
      <div className="space__detail-main d-flex">
        <div className="space__detail-map">
          <div className="space__detail-map-text">
            <div>
              <h2 className="space__detail-map-title">問空間</h2>
            </div>
            <div>
              <h4>Ask Art Space</h4>
            </div>
            <div className="space__detail-map-title-6">
              <FaMapMarkerAlt className="FaMapMarkerAlt_icon" />新北市板橋區重慶路8號9樓
            </div>
            <div className="space__detail-map-title-6">
              <ImPhone />0911111111
            </div>
            <div>
              <h6>「問空間」創立於2020年，位於板橋區捷運府中站熙來攘往鬧市附近的一棟大廈9樓內。設立畫廊初衷就是希望成為多方位經營的藝術空間</h6>
            </div>
            <br />
            <div className="space__icon">
              <div className="space__collect">
                <Link to="#">
                  <FaHeart className="FaHeart_icon" />
                  收藏
                </Link>
              </div>
              <div className="space__share">
                <Link to="#">
                  <FiShare className="share_icon" />
                  分享
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
           <img className="space__detail-map-img"
              src={require('./map.png')}
              alt="map"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

    </>
  )
}
export default SpaceDetail
