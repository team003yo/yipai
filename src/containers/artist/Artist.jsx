/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./artist.css";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import { TbArrowsSort } from 'react-icons/tb'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Artist() {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getArtist() {
      let response = await axios.get('http://localhost:3001/artist');
      setArtist(response.data);
    }
    getArtist();
  }, []);
  return (
    <>
      <header>
        <div className="artist-banner">
          <div className="artistImg"></div>
        </div>
      </header>
      <div className="artist-container">
        <div className="artist-main-content">
          <nav className="artist-aside-menu">
            <h3>藝術家</h3>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg " style={{border:"none"}} id="dropdown-basic">
                依名字排序
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">升冪</Dropdown.Item>
                <Dropdown.Item href="#/action-2">降冪</Dropdown.Item> 
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg" style={{border:"none"}} id="dropdown-basic">
                依總銷售量
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">升冪</Dropdown.Item>
                <Dropdown.Item href="#/action-2">降冪</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
          <main>
            <div className="d-flex justify-content-between m-2">
              <div className="col1 text-nowrap d-inline-flex">
                <Link to="/" className="text-nowrap">
                  <p>首頁</p>
                </Link>
                  <p>▷</p>
                <Link to="#" className="text-nowrap">
                  <p>藝術家</p>
                </Link>                
              </div>
              
              <div className="col-7"></div>
              <Button className="button-new-old col-4 text-nowrap" variant="dark">
                由新至舊<TbArrowsSort />
              </Button>
              
            </div>
        <div className="album ">
        <div className="artist-container ">
          <div className="row align-items-start">
            <div className="">              
              <div className="artist-card mb-5 box-shadow"> 
              {artist.map((users, index) => {
                return(
                    <div key={users.users_id}>
                      <Link to={`/artist/${users.users_id}`}>
                        <div className="position-relative px- py-5 shadow-sm p-3 mb-5 bg-body rounded">
                          <img className="artist-card-img-top" src={users.users_main_product} alt="Card image page" />
                          <div className="artist-card-body">
                            <div className="artist-btn-group">
                            <div className="d-flex justify-content-space-evenly align-items-center">
                              <img className="artist-card-img-body" src={users.user_imageHead} alt="Card image" />
                              <div className="artist-text-container">                      
                              <p className="artist-card-text">{users.users_name}</p>
                              <small className="text-muted">查看更多</small>
                              </div>        
                            </div>
                            </div>
                          </div>    
                        </div>
                      </Link>
                    </div>
                  );
                })
              }
              </div>
            </div>
            
          </div>
        </div>
</div>           
            <div>
              <Pagination className="artist-page-item justify-content-center mt-4">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                {/* <Pagination.Ellipsis /> */}
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Artist;
