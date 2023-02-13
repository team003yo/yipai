import React from 'react'
import { Link } from 'react-router-dom'
import './artist.css'
import { FaHeart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
// import { FaMapMarkerAlt } from 'react-icons/fa'
// import { ImPhone } from 'react-icons/im'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Carousel } from 'react-responsive-carousel'

function ArtistDetail() {
  const { artistId } = useParams()
  // const [artist, setData] = useState([]);
  const [artistProduct, setArtistProdut] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        `http://localhost:3001/artist/${artistId}?`
      )
      setData(response.data)
    }
    getData()
  }, [])

  useEffect(() => {
    async function artistProduct() {
      let productResponse = await axios.get('http://localhost:3001/product')
      setArtistProdut(productResponse.data)
    }
    artistProduct()
  }, [])

  console.log(data)
  let filtered = [...artistProduct]
  filtered = filtered.filter(
    (artistProduct) => artistProduct.artist === data[0].users_name
  )
  console.log(filtered)
  return (
    <>
      <div>
        {data.map((users, item) => {
          return (
            <>
              <div key={users.users_id}>
                <div className="artist-detail-img">
                  <Carousel
                    className="artist-carousel"
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                  >
                    <div>
                      <img
                        className="artist-aside-pic"
                        src={users.user_imagePage}
                        alt=""
                      />
                      <div className="artist-detail-name">
                        <h1 className="artist-name">{users.users_name}</h1>
                        {/* <h2 className="artist-name">Yannick Aaron</h2> */}
                        <h3 className="artist-born">{users.users_birth}</h3>
                      </div>
                    </div>
                  </Carousel>
                </div>
                <div className="detail-main d-flex">
                  <div className="detail-intro">
                    <div className="detail-intro-text">
                      <div>
                        <h3 className="detail-intro-title">
                          {users.users_slogan}
                        </h3>
                      </div>
                      <div>
                        <h4 className="detail-intro-body">
                          {users.users_introduce}
                        </h4>
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
                      <img
                        className="detail-intro-img"
                        src={users.users_aside_picture}
                        alt="artist-intro-pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="album ">
                <div className="artist-container ">
                  <div className="row align-items-start">
                    <div className="artist-card mb-5 box-shadow px-3 justify-content-center">
                      {filtered.map((artistProduct, index) => {
                        return (
                          <div key={artistProduct.id} className="px-3">
                            <Link to={`/products/${artistProduct.id}`}>
                              <div className="position-relative px-3 py-5 shadow p-3 mb-5 artist-background rounded">
                                <img
                                  className="artist-card-img-top"
                                  src={artistProduct.img_file}
                                  alt="Card image page"
                                />
                                <div className="artist-card-body">
                                  <div className="artist-btn-group">
                                    <div className="d-flex justify-content-space-evenly align-items-center">
                                      {/* <img
                                      className="artist-card-img-body"
                                      src={users.user_imageHead}
                                      alt="Card image"
                                    /> */}
                                      <div className="artist-text-container">
                                        <p className="artist-card-text">
                                          作品名稱：{artistProduct.name}
                                        </p>
                                        <small className="text-muted">
                                          查看更多此畫細節
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      })}
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
