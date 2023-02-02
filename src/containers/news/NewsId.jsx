// import React from 'react'
import React, { useState } from 'react'
import './newsId.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { IoIosTimer } from 'react-icons/io'
import { FaMapMarker } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NewsId = () => {
  const { newsId } = useParams()
  const [data, setdata] = useState([])

  useEffect(() => {
    // console.log('第二個參數是空陣列')
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡

    async function getdata() {
      let response = await axios.get(`http://localhost:3001/news/${newsId}?`)
      setdata(response.data)
      // console.log(response.data)
    }
    getdata()
  }, [])

  return (
    <div>
      <div className="container">
        {data.map((newsDetail) => {
          return (
            <div className="wrapper">
              <img
                className="yipai__img"
                src={newsDetail.img_file}
                alt="banner"
              />
              <div>
                <div className="d-flex flex-row justify-content-center my-4 a">
                  <div className="yipai_newsId">
                    <div className="icon">
                      <box className="collect">
                        <Link to="#">
                          <p>
                            <FaHeart className="FaHeart_icon" />
                            收藏
                          </p>
                        </Link>
                      </box>
                      <box className="share">
                        <Link to="#">
                          <p>
                            {' '}
                            <FiShare className="share_icon" />
                            分享
                          </p>
                        </Link>
                      </box>
                    </div>
                    <div key={newsDetail.id}>
                      <h1 className="fw-bold">{newsDetail.name}</h1>
                      <div className="d-flex flex-row justify-content-center my-2 ">
                        <IoIosTimer className="timer_icon" />
                        {newsDetail.news_time}
                      </div>
                    </div>
                    <Container>
                      <Row>
                        <Col>
                          <p className="newsDetail__text" align="left">
                            {newsDetail.news_introduction}
                          </p>
                        </Col>
                        <div className="newsDetail_address d-flex flex-row justify-content-center ">
                          <h5 className='newsDetail_address-icon'> <FaMapMarker />地點</h5>
                          <h5> {newsDetail.news_address}</h5>

                        </div>

                        <div className="mapC">
                          <img
                            className="map__img"
                            src={require('./Map.jpg')}
                          />
                        </div>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewsId
