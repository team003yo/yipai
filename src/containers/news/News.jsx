// import React from 'react'
import React, { useState } from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import news__banner from '../../assets/news__banner.png'
import Button from 'react-bootstrap/Button'
import { TbArrowsSort } from 'react-icons/tb'
import { BiTimeFive } from 'react-icons/bi'
import axios from 'axios'
import { useEffect } from 'react'

const News = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    async function getNews() {
      let response = await axios.get('http://localhost:3001/news')
      setNews(response.data)
    }
    getNews()
  }, [])

  // const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div>
      <header id="News__header">
        <div className="News__banner">
          <div className="News__banner__img"></div>
        </div>
      </header>
      <section id="News__section">
        <nav id="News__nav">
          <div className="d-md-flex justify-content-between m-2">
            <div className="News__none550 text-nowrap d-inline-flex">
              <Link to="/" className="News__text-nowrap">
                <p>首頁</p>
              </Link>
              <p> ▶ </p>
              <Link to="#" className="News__text-nowrap">
                <p>展覽空間</p>
              </Link>
            </div>
            <div className="col-7">
              <Button className="News__button" variant="dark">
                由新至舊
                <TbArrowsSort />
              </Button>
            </div>
          </div>
        </nav>
        <main className="News__main">
          <div className="News__main-wrap">
            {news.map((news, index) => {
              return (
                <div key={news.news_id} classMame="News__img-id-wrap">
                  <Link to={`/news/${news.news_id}`}>
                    <img className="News__card-img-top" src={news.img_file} />
                    <h4 className="News__newsId ">{news.name}</h4>
                    <p className="News__article">
                      <BiTimeFive />
                      {news.news_time}
                    </p>
                    <p className="News__text">{news.news_introduction}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </main>
      </section>
    </div>
  )
}
export default News
