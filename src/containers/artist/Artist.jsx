/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./artist.css";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import cat from './cat.jpeg'
import artist_head from './artist_head.png'
// import { Button } from 'react-bootstrap';

function Artist() {
  return (
    <>
      <header>
        <div class="banner">
          <div class="artistImg"></div>
        </div>
      </header>
      <div class="container">
        <div class="main-content">
          <nav class="aside-menu">
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
              <Button className="button col-4 text-nowrap" variant="dark">
                由新至舊
              </Button>
            </div>
        <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">              
              <div class="card mb-5 box-shadow"> 
                <img class="card-img-top" src={cat} alt="Card image cap" />
                <div class="card-body">   
                  <Link to='artistdetail'>              
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="btn-group">                    
                        <img class="card-img-body" src={artist_head} alt="Card image cap" />
                        <div class="artistHead"></div>                      
                        </div>
                      <div className="text-container">                      
                        <p class="card-text">Yannick Aaron</p>
                        <small class="text-muted">French</small>
                      </div>                                        
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
</div>           
            <div>
              <Pagination className="justify-content-end mt-4 mb-5">
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
