/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './artist.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import Pagination from "react-bootstrap/Pagination";
import Button from 'react-bootstrap/Button';
import { TbArrowsSort } from 'react-icons/tb';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import Pagination from '../space/Pagination';

import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import banner from './artist_main.png';
function Artist() {
  const [artist, setArtist] = useState([]);
  const [originalArtist, setOriginalArtist] = useState([]);
  const [orderASC, setOrderASC] = useState([]);
  //select值
  const [selectedById, setSelectedById] = useState('');
  const [selectedSeelsNumber, setSelectedSeelsNumber] = useState([]);
  const [sortBy, setSortBy] = useState('');

  //清除選擇鍵
  const handleClear = () => {
    //清空初始值
    setArtist(originalArtist);
    // console.log(originalArtist)
    //清空名稱排序
    setSelectedById('');
    //清空時間
    setSelectedSeelsNumber([]);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = artist.slice(firstPostIndex, lastPostIndex);
  const pages = Math.ceil(artist.length / postsPerPage);

  // const [selectedName, setSelectedName] = useState('');

  // const handleNameChange = (event) => {
  //   setSelectedName(event.target.value);
  // };
  useEffect(() => {
    console.log('空陣列的 useEffect');
  }, []);

  useEffect(() => {
    // console.log('第二個參數是空陣列');
    // 在 component 初始化的時候跑一次
    // 後端要資料放這裡
    async function getArtist() {
      let response = await axios.get('http://localhost:3001/artist');
      setArtist(response.data);
      setOriginalArtist(response.data);
    }
    getArtist();

  }, []);

  //由新至舊按鈕
  const handleSort = () => {
    const sortedA = [...artist].sort((a, b) => b.users_id - a.users_id);
    setArtist(sortedA);
  };
  const handleSortNameUp = () => {
    const sortedB = [...artist].sort((a, b) => a.users_name.localeCompare(b.users_name));
    setArtist(sortedB);
    console.log(sortedB);
  };
  const handleSortNameDown = () => {
    const sortedC = [...artist].sort((a, b) => b.users_name.localeCompare(a.users_name));
    setArtist(sortedC);
    console.log(sortedC);
  };
  const handleSortAgeUp = () => {
    const sortedD = [...artist].sort((a, b) => b.users_birth.localeCompare(a.users_birth));
    setArtist(sortedD);
    console.log(sortedD);
  };
  const handleSortAgeDown = () => {
    const sortedE = [...artist].sort((a, b) => a.users_birth.localeCompare(b.users_birth));
    setArtist(sortedE);
    console.log(sortedE);
  };

  return (
    <>
      <header className="initial-scale=1.5">
        <Carousel
          className="artist-carousel"
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src={banner} alt="" />
          </div>
        </Carousel>
      </header>
      <div className="artist-container">
        <div className="artist-main-content">
          <nav className="artist-aside-menu">
            <h3>藝術家</h3>
            <hr />

            <Dropdown>
              <Dropdown.Toggle
                variant="--color-bg "
                style={{ border: 'none' }}
                id="dropdown-basic"
              >
                依名字排序
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  value="升冪"
                  onClick={handleSortNameUp}
                >
                  依升冪
                </Dropdown.Item>
                <Dropdown.Item
                  value="降冪"
                  onClick={handleSortNameDown}
                >
                  依降冪
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <Dropdown>
              <Dropdown.Toggle
                variant="--color-bg"
                style={{ border: 'none' }}
                id="dropdown-basic"
              >
                依藝術家年紀
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  value="升冪"
                  onClick={handleSortAgeUp}
                >
                  依升冪
                </Dropdown.Item>
                <Dropdown.Item
                  value="降冪"
                  onClick={handleSortAgeDown}
                >
                  依降冪
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="mt-4" variant="dark" onClick={handleClear}>
              Clear
            </Button>
          </nav>
          <main>
            <div className="d-flex justify-content-between m-2 ">
              <div className="col1 text-nowrap d-inline-flex">
                <Link to="/" className="text-nowrap">
                  <p>首頁</p>
                </Link>
                <p>▷</p>
                <Link to="#" className="text-nowrap">
                  <p>藝術家</p>
                </Link>
              </div>
              <div className="col-２"></div>
              <Button
                className="button-new-old col-4 text-nowrap"
                variant="dark"
                onClick={handleSort}
              >
                由新至舊
                <TbArrowsSort />
              </Button>
            </div>
            <div className="album ">
              <div className="artist-container ">
                <div className="row align-items-start">
                  <div className="artist-card mb-5 box-shadow px-3 justify-content-center">
                    {currentPosts.map((users, index) => {
                      return (
                        <div key={users.users_id} className="px-3">
                          <Link to={`/artist/${users.users_id}`}>
                            <div className="position-relative px-3 py-5 shadow p-3 mb-5 artist-background rounded">
                              <img
                                className="artist-card-img-top"
                                src={users.users_main_product}
                                alt="Card image page"
                              />
                              <div className="artist-card-body">
                                <div className="artist-btn-group">
                                  <div className="d-flex justify-content-space-evenly align-items-center py-3">
                                    <img
                                      className="artist-card-img-body"
                                      src={users.user_imageHead}
                                      alt="Card image"
                                    />
                                    <div className="artist-text-container">
                                      <p className="artist-card-text">
                                        {users.users_name}
                                      </p>
                                      <small className="text-muted">
                                        查看更多
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                style={{
                  display: 'inline-block',
                  margin: '2px',
                  backgroundColor: 'black',
                  borderColor: '#dbdbdb',
                  color: 'white',
                  borderWidth: '1px',
                  width: '40px',
                  height: '30px',
                  borderRadius: '3px',
                  textAlign: 'center',
                }}
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
                disabled={currentPage === 1}
              >
                {'<<'}
              </button>
              <Pagination
                className="artist-page-item "
                totalPosts={artist.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
              <button
                style={{
                  display: 'inline-block',
                  margin: '2px',
                  backgroundColor: 'black',
                  borderColor: '#dbdbdb',
                  color: 'white',
                  borderWidth: '1px',
                  width: '40px',
                  height: '30px',
                  borderRadius: '3px',
                  textAlign: 'center',
                }}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                disabled={currentPage >= pages}
              >
                {'>>'}
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Artist;