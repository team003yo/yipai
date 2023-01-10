import React from 'react'
import { Link } from 'react-router-dom'
import './space.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';



function Space() {
  return (
    <>
      <header>
        <div class="banner">
          <div class="bannerImg"></div>
        </div>
      </header>
      <div class="container">
        <div class="main-content">
          <nav class="aside-menu">
            <h3>空間分類</h3>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
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
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                依營業時間
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">假日</Dropdown.Item>
                <Dropdown.Item href="#/action-2">平日</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* <select class="aside-menu-select">
                <option selected></option>
                <option value="1">北</option>
                <option value="2">中</option>
                <option value="3">南</option>
              </select>
              <br />
              <select class="aside-menu-select">
                <option selected>營業時間</option>
                <option value="1">假日</option>
                <option value="2">平日</option>
              </select> */}
          </nav>
          <main>
            <div className="d-flex justify-content-between m-2">
              <p>首頁▷展覽資訊</p>
              <Button variant="dark">由新至舊</Button>
            </div>
            <div className="container main-card mt-5">
              <div className="row align-items-start">
                <div className="col main-card-item">
                  
                    
                    <Link to="spacedetail">
                    <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                    <h4>問空間</h4>
                    <h4 className="main-card-item-text">英文名字</h4>
                    <h5>新北市板橋區重慶路8號9樓</h5>
                    </Link>
                  
                </div>
                <div className="col main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
                <div className="col main-card-item">
                  <img src="https://obs.line-scdn.net/0hUiVAWg8pCkZrOCMHEzZ1EVFuCSlYVBlFDw5bRShWVHIRC0oWU1pNKEg5XHNFDk0YBQlFI007EXcUD04YBVtN/w1200" />
                  <h4>問空間</h4>
                  <h4>英文名字</h4>
                  <h5>新北市板橋區重慶路8號9樓</h5>
                </div>
              </div>
            </div>
            <div>
              <Pagination className="justify-content-end mt-4">
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
  )
}

export default Space
