// import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { TbArrowsSort } from 'react-icons/tb'
import { BiTimeFive } from 'react-icons/bi'
import { MdArrowForwardIos,MdArrowBackIosNew } from 'react-icons/md'
import { RiArrowUpSLine,RiArrowDownSLine } from 'react-icons/ri'
import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function News  ()  {
  window.scrollTo(0, 0);
  // 為了處理網址
  let navigate = useNavigate();
  const { currentPage } = useParams();
  const [page, setPage] = useState(parseInt(currentPage, 10) || 1); // 目前在哪一頁
  const [totalPage, setTotalPage] = useState(); // 總共有幾頁

  const [news, setNews] = useState([]);

  useEffect(()=>{
    console.log('空陣列的 useEffect');
  },[]);

  useEffect(() => {
    console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getNews() {
      let response = await axios.get(`http://localhost:3001/news?page=${page}`);
      setNews(response.data.data);
      console.log(response.data.data);
      setTotalPage(response.data.pagination.totalPage);
    }
    getNews();
  }, [page]);

  
  const getPages = () => {
    let pages = [];
  
    // 顯示「上一頁」
    if (page > 1) {
      pages.push(
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
          key={-1}
          onClick={(e) => {
            setPage(page - 1);
            navigate(`/news?page=${page - 1}`);
          }}
        >
          {'<'}
        </RiArrowUpSLine>
      );
    }
  
    // 顯示頁碼
    // for (let i = 1; i <= 5; i++) {
    //   pages.push(
    //     <li
    //       style={{
    //         display: 'inline-block',
    //         margin: '2px',
    //         backgroundColor: 'black',
    //         borderColor: page === i ? '#00d1b2' : '#dbdbdb',
    //         color: page === i ? '#fff' : '#363636',
    //         borderWidth: '1px',
    //         width: '28px',
    //         height: '28px',
    //         borderRadius: '3px',
    //         textAlign: 'center',
    //       }}
    //       key={i}
    //       onClick={(e) => {
    //         setPage(i);
    //         navigate(`/news?page=${i}`);
    //       }}
    //     >
    //       {i}
    //     </li>
    //   );
    // }
  
    // 顯示「下一頁」
    if (page < totalPage) {
      pages.push(
        <RiArrowDownSLine
          style={{
            display: 'flex',
            margin: '2px',
            borderColor: '#dbdbdb',
            borderWidth: '1px',
            width: '50px',
            height: '50px',
            borderRadius: '3px',
            textAlign: 'center',
            
          }}
          key={-2}
          onClick={(e) => {
            setPage(page + 1);
            navigate(`/news?page=${page + 1}`);
          }}
        >
          
        </RiArrowDownSLine>
      );
    }
  
    return pages;
  };

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
              <Button className="News__button mt-2" variant="dark">
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
        <ul>{getPages()}</ul>
      </section>
     
    </div>
  )
}
export default News