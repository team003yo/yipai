import React from 'react'
import { Link } from 'react-router-dom'
import './spacedetail.css'

// icon
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImPhone } from 'react-icons/im'
import { AiFillCalendar } from 'react-icons/ai'


import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Carousel } from 'react-responsive-carousel'

//地圖
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function SpaceDetail() {
  window.scrollTo(0, 800);
  const { spaceId } = useParams()
  const [data, setData] = useState([])
  // const [spaceLat, setSpaceLat] = useState([])
  // const [spaceLng, setSpaceLng] = useState([])

  // const [state, setState] = useState([])
  // useEffect(() => {
    // 連接資料庫
    // 設定狀態
    // console.log('didmount')
    // setState(demoDataFromServer)
  // }, [])

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`http://localhost:3001/space/${spaceId}?`)
      setData(response.data)
      console.log(response.data)
      // setSpaceLat(response.data[0].space_lat)
      // console.log(response.data[0].space_lat)
      // setSpaceLng(response.data[0].space_lng)
      // console.log(response.data[0].space_lng)
    }
    getData()
  }, [])
  //箭頭
  // const demoDataFromServer = [{ lat: 25.0450374, lng: 121.165975 }]

  const customMarker = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    // iconSize: [25, 41],
    // iconAnchor: [10, 41],
    // popupAnchor: [20, -40],
  })

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
                    <AiFillCalendar/>
                      {item.on_weekdays}
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
                    {/* <img
                      className="space__detail-map-img"
                      src={require('./map.png')}
                      alt="map"
                      style={{ width: '100%' }}
                    /> */}
                    <LeafletMap
                      center={[item.space_lat, item.space_lng]}
                      zoom={22}
                      style={{ height: '50vh', width: '80vh' }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                      />
                      {/* {state.map(({ lat, lng }, index) => ( */}
                        <Marker
                          position={[item.space_lat, item.space_lng]}
                          icon={customMarker}
                          // key={index}
                        >
                          {/* <Popup>
                          {index + 1} is for popup with lat: {lat} and lon {lng}
                        </Popup> */}
                        </Marker>
                      {/* ))} */}
                    </LeafletMap>
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
