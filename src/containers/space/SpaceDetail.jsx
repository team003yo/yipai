import React from 'react'
import { Link } from 'react-router-dom'
import './spacedetail.css'

// icon
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Carousel } from 'react-responsive-carousel'

function SpaceDetail() {
  const { spaceId } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`http://localhost:3001/space/${spaceId}?`)
      setData(response.data)
      console.log(response.data)
    }
    getData()
  }, [])

  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <>
              <div className="space__detail-img">
                <img
                  className="space__aside-pic"
                  src={require('./aside.png')}
                  alt="aside"
                />

                {/* <img
                  className="space__aside"
                  src={item.space_img_file}
                  alt="aside-1"
                /> */}
                <Carousel autoPlay className="space__aside">
                  <div>
                    <img src={item.space_img_file} />
                  </div>
                  <div>
                    <img src={item.space_img_file2} />
                  </div>
                  <div>
                    <img src={item.space_img_file3} />
                  </div>
                </Carousel>
                <div className="space__detail-name">
                  <h1>{item.space_name}</h1>
                </div>
              </div>

              <div className="space__detail-main d-flex">
                <div className="space__detail-map">
                  <div className="space__detail-map-text">
                    <div>
                      <h2 className="space__detail-map-title">
                        {item.space_name}
                      </h2>
                    </div>
                    <div className="space__detail-map-title-6">
                      <FaMapMarkerAlt className="FaMapMarkerAlt_icon" />
                      {item.space_address}
                    </div>
                    <div className="space__detail-map-title-6">
                      <ImPhone />
                      {item.space_tel}
                    </div>
                    <div>
                      <h6>{item.space_introduction}</h6>
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
                    <img
                      className="space__detail-map-img"
                      src={require('./map.png')}
                      alt="map"
                      style={{ width: '100%' }}
                    />
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
export default SpaceDetail
