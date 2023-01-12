import React from 'react'
import './newsId.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { IoIosTimer } from 'react-icons/io'
import { FaMapMarker } from 'react-icons/fa'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const NewsId = () => (
  <div>
    <div className="container">
      <div className="wrapper">
        <img className="yipai__img" src={require('./first.jpg')} alt="banner" />
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
              <h1 className="fw-bold">達文西光影藝術特展</h1>
              <div className="d-flex flex-row justify-content-center my-4 ">
                <IoIosTimer className="timer_icon" />
                2022-12-01 ~ 2022-12-07
              </div>
            </div>
            <Container>
              <Row>
                <Col>
                  <h6 className="news__text" align="left">
                    全台首次以達文西為主題的藝術光影特展《走進大師的腦內：李奧納多·達文西-光影體驗展》，將於
                    12 月 2 日在双融域 AMBI SPACE
                    ONE（台北101五樓）作為亞洲首站展出， 此活動會有一面 mini
                    gallery，將展出與達文西相關的創作，主辦單位特別給 The
                    Bridege Art 的會員藝術家 3
                    位名額可以展出作品與販售週邊全台首次以達文西為主題的藝術光影特展《走進大師的腦內：李奧納多·達文西-光影體驗展》，將於
                    12 月 2 日在双融域 AMBI SPACE
                    ONE（台北101五樓）作為亞洲首站展出，此活動會有一面 mini
                    gallery，將展出與達文西相關的創作，主辦單位特別給 The
                    Bridege Art 的會員藝術家 3 位名額可以展出作品與販售週邊!
                  </h6>
                </Col>
                <div className="address">
                  <box className=" fw-bold">
                    <FaMapMarker />
                    地點
                    <h6 >双融域 AMBI SPACE ONE（台北101五樓）</h6>
                  </box>
                  
                </div>

                <Col>
                  <div className="mapC">
                    <img className="map__img" src={require('./Map.jpg')} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NewsId
