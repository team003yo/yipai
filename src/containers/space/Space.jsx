import React from 'react'
import { Link } from 'react-router-dom'
import './space.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TbArrowsSort } from 'react-icons/tb'
// import { FaHeart } from 'react-icons/fa'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Space() {
  const [space, setSpace] = useState([]);

  useEffect(() => {
    console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getSpace() {
      let response = await axios.get('http://localhost:3001/space');
      setSpace(response.data);

    }
    getSpace();
  }, []);
  return (
    <>
      <header>
        <div class="space__banner">
          <div class="space__bannerImg"></div>
        </div>
      </header>
      <div class="space__container font-family">
        <div class="space__main-content">
          <nav class="space__aside-menu">
            <h3>空間分類</h3>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg" style={{ border: "none" }} id="dropdown-basic">
                依地點
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">北</Dropdown.Item>
                <Dropdown.Item href="#/action-2">中</Dropdown.Item>
                <Dropdown.Item href="#/action-3">南</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="--color-bg" style={{ border: "none" }} id="dropdown-basic">
                依營業時間
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">假日</Dropdown.Item>
                <Dropdown.Item href="#/action-2">平日</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </nav>
          <main>
            <div className="d-md-flex justify-content-between m-2 space__main__header">
              <div className="space__none550 col1 text-nowrap d-inline-flex">
                <Link to="/" className="text-nowrap">
                  <p>首頁</p>
                </Link>
                <p> ▶ </p>
                <Link to="#" className="text-nowrap">
                  <p>展覽空間</p>
                </Link>
              </div>
              <div className="col-2">
                <Button
                  className="space__button col-4 text-nowrap"
                  variant="dark"
                >
                  由新至舊
                  <TbArrowsSort />
                </Button>
              </div>
            </div>
            <div className="container space__main-card mt-5">
              <div className="row align-items-start">
                {space.map((space, index) => {
                  return(
                    <div
                      key={space.space_id}
                      className="col space__main-card-item"
                    >
                      <Link to={`/space/${space.space_id}`}>
                        <div className="position-relative">
                          <div className="Space__FaHeart_icon">
                            <Link to="#">
                              {/* <FaHeart className="FaHeart_icon" /> */}
                              {/* 收藏 */}
                            </Link>
                          </div>
                          <img src={space.space_img_file} />
                        </div>
                        <h4>{space.space_name}</h4>
                        {/* <h4 className="space__main-card-item-text">英文名字</h4> */}
                        <h6>{space.space_address}</h6>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Pagination className="space__page-item justify-content-center mt-4">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Space
