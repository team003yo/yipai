// import React from 'react'
import React, { useState } from "react";
import "./newsId.css";
import { FaHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//地圖
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { margin } from "@mui/system";
import { Button } from "react-bootstrap";


const NewsId = () => {
  const { newsId } = useParams();
  const [data, setdata] = useState([]);
  
  const [newsData, setnewsData] = useState([]);
  const [isFav, setIsFav] = useState(false);
  
  useEffect(() => {
    // console.log('第二個參數是空陣列')
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    
    //收藏
    const NewsIdFav = ({ name, id, handleClick, isFavorited }) => {
    const [isFav, setIsFav] = useState(isFavorited);
    
    }

    async function getdata() {
      let response = await axios.get(`http://localhost:3001/news/${newsId}?`);
      setdata(response.data);
      // console.log(response.data)
    }
    getdata();
  }, []);

  const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    // iconSize: [25, 41],
    // iconAnchor: [10, 41],
    // popupAnchor: [20, -40],
  });

  return (
    <div>
      <div className="news__container">
        {data.map((newsDetail) => {
          return (
            <div className="news__wrapper">
              <img
                className="news__yipai__img"
                src={newsDetail.img_file}
                alt="banner"
              />
              <div>
                <div className="d-flex flex-row justify-content-center my-4 news__a">
                  <div className="yipai_newsId">
                    <div className="news__timericon">
                      <box className="news__collect">
                          <p>
                            <FaHeart  className="news__FaHeart_icon" />
                            收藏
                          </p>
                      </box>
                    </div>
                    <div key={newsDetail.id}>
                      <h1 className="news__fw-bold">{newsDetail.name}</h1>
                      <div className="d-flex flex-row justify-content-center my-2 ">
                        <IoIosTimer className="news__timer_icon" />
                        {newsDetail.news_time}
                      </div>
                    </div>
                      <Row className="news__row">
                          <p className="newsDetail__text" align="left">
                            {newsDetail.news_introduction}
                          </p>
                      
                        <div className="newsDetail_address d-flex flex-row justify-content-center ">
                          <h5 className="newsDetail_address-icon">
                            {" "}
                            <FaMapMarker />
                            地點
                          </h5>
                          <h5> {newsDetail.news_address}</h5>
                        </div>

                        <div className="news__google">
                          <LeafletMap
                            center={[
                              newsDetail.news_lat,
                              newsDetail.news_lng,
                            ]}
                            zoom={22}
                            style={{ height: "50vh", width: "100%", margin: "auto" }}
                          >    
                            <TileLayer
                              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                            />
                            {/* {state.map(({ lat, lng }, index) => ( */}
                            <Marker
                              position={[
                                newsDetail.news_lat,
                                newsDetail.news_lng,
                              ]}
                              icon={customMarker}
                              // key={index}
                            >
                              {/* <Popup>
                            {index + 1} is for popup with lat: {lat} and lon {lng}
                              </Popup> */}
                            </Marker>
                            {/* ))} */}
                             </LeafletMap>
                            {/* <img
                            className="map__img"
                            src={require("./Map.jpg")}
                          /> */}
                        </div>
                      </Row>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsId;
