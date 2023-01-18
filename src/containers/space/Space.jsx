import React from 'react'
import { Link } from 'react-router-dom'
import './space.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import { TbArrowsSort } from 'react-icons/tb'
// import { FaHeart } from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.min.css';


function Space() {
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
            <div className="d-md-flex justify-content-between m-2">
              <div className="space__none550 col1 text-nowrap d-inline-flex">
                <Link to="/" className="text-nowrap">
                  <p>首頁</p>
                </Link>
                <p> ▶ </p>
                <Link to="#" className="text-nowrap">
                  <p>展覽空間</p>
                </Link>
              </div>
              <div className="col-7">
              <Button className="space__button col-4 text-nowrap" variant="dark"> 
                由新至舊<TbArrowsSort />
              </Button>
              </div>
            </div>
            <div className="container space__main-card mt-5">
              <div className="row align-items-start">
                <div className="col space__main-card-item">
                  <Link to="spacedetail">
                    <div className="position-relative">
                      <div className="Space__FaHeart_icon">
                        <Link to="#">
                          {/* <FaHeart className="FaHeart_icon" /> */}
                          {/* 收藏 */}
                        </Link>
                      </div>
                      <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                    </div>
                      
                    <h4>問空間</h4>
                    <h4 className="space__main-card-item-text">英文名字</h4>
                    <h5>新北市板橋區重慶路8號9樓</h5>
                  </Link>
                </div>
                <div className="col space__main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col space__main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col space__main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col space__main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col space__main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
              </div>
            </div>
            <div>
              <Pagination className="space__page-item justify-content-end mt-4">
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