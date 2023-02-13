// import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import NewsPagination from './NewsPagination'

//icon
import { BiTimeFive } from 'react-icons/bi'
import { RiArrowUpSLine,RiArrowDownSLine } from 'react-icons/ri'

//連接資料庫
import axios from 'axios';
import { useEffect, useState } from 'react';

function News()  {
  window.scrollTo(0, 800);
  const [news, setNews] = useState([])
    //News初始值
  const [originalNews, setOriginalNews] = useState([])

  //頁碼
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(8)
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = news.slice(firstPostIndex, lastPostIndex)
  const pages = Math.ceil(news.length / postsPerPage)
  console.log(currentPage,news.length,pages)

   //select顯示在頁面的值
  const [selectedNews_time, setSelectedNews_time] = useState('')

  useEffect(() => {
    async function getNews() {
      let response = await axios.get(`http://localhost:3001/news`)
      setNews(response.data);
      console.log(response.data);
      setOriginalNews(response.data)
    }
    getNews();
  }, []);

  //由新至舊按鈕
  const handleClick = (value, type) => {
    let filtered =[...originalNews]
    const sortOrder = value
        filtered = [...filtered].sort((a, b) => {
          if (sortOrder === '由舊至新') {
            return a.news_id - b.news_id;
          } else if (sortOrder === '由新至舊') {
            return b.news_id - a.news_id;
          }
        });
        setNews(filtered);
  }

  return (
    <div>
      <header id="News__header">
        <div className="News__banner">
          <div className="News__banner__img"></div>
        </div>
      </header>
      <section id="News__section">
        <nav id="News__nav">
          <div className="News__navbar">
            <div className="News__none550 text-nowrap d-flex">
              <Link to="/" className="News__text-nowrap">
                <p>首頁▶展覽空間</p>
              </Link>
            <Dropdown>
                  <Dropdown.Toggle
                    variant="--color-bg"
                    style={{ border: 'none' }}
                    id="dropdown-basic"
                    className="News＿--color-bg"
                  >
                    展期排序
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item value="由新至舊"
                  onClick={() => handleClick('由新至舊', 'news_id')}
                  >由新至舊</Dropdown.Item>
                    <Dropdown.Item value="由舊至新"
                  onClick={() => handleClick('由舊至新', 'news_id')}
                  >由舊至新</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            </div>
          

          </div>
        </nav>
        <main className="News__main">
          <div className="News__main-wrap">
            {currentPosts.map((news, index) => {
              return (
                <>
                <div  className="News__img-id-wrap">
                  <Link to={`/news/${news.news_id}`}>
                    <img className="News__card-img-top" src={news.img_file} />
                    <h4 className="News__newsId ">{news.name}</h4>
                    <p className="News__article">
                      <BiTimeFive
                      />
                      {news.news_time}
                    </p>
                    <p className="News__text">{news.news_introduction}</p>
                  </Link>
                </div>
                </>
              )
            })}
          </div>
        </main>
      </section>
        <div className=" News__currentPage"> 
        <RiArrowUpSLine
                style={{
                  display: 'inline-block',
                  margin: '2px',
                  borderColor: '#dbdbdb',
                  borderWidth: '1px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '3px',
                  textAlign: 'center',
                }}
                onClick={() => {
                  setCurrentPage(currentPage - 1)
                }}
                disabled={currentPage === 1}
              >
                {'<<'}
                <NewsPagination
                
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
                </RiArrowUpSLine>
              <RiArrowDownSLine
                style={{
                  display: 'flex',
                  margin: '2px',
                  borderColor: '#dbdbdb',
                  borderWidth: '1px',
                  width: '50px',
                  height: '50px',
                  
                }}
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                }}
                disabled={currentPage >= pages}
              >
                {'>>'}  
              </RiArrowDownSLine>
            </div>
    </div>
  )
}
export default News