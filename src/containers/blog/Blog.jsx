import React from "react";
import Article from "../../components/article/Article";
import ArtistBlog from "../airistblog/Artistblog";
import SpcaeBlog from "../spaceBlog/SpaceBlog";
import Productsblog from "../productsblog/Productsblog";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import first from "../../assets/first.png";
import second from "../../assets/second.jpg";

const Blog = () => {
  return (
    <div>
      <Carousel autoPlay showThumbs={false} showStatus={false}>
        <div>
          <img alt="first" src={first} />
          {/* <p className="legend">畫廊</p> */}
        </div>

        <div>
          <img alt="first" src={second} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
      <div className="yipai__blog section__padding" id="blog">
        <div className="yipai__blog-heading">
          <h1 className="gradient__text">最新消息｜當期展覽及新展預告</h1>
        </div>
        <Link to="news">
          <h4 className="spaceblog-content">更多最新消息 ▶</h4>
        </Link>

        <div className="yipai__blog-container">
          <div className="yipai__blog-container_groupA">
            <Link to="/news/3">
              <Article
                imgUrl={blog01}
                date="2022-11-12（六）- 2023-02-28（二）"
                text="想你到月球｜張雨生特展 FLY ME TO THE MOON & BACK"
              />
            </Link>
          </div>
          <div className="yipai__blog-container_groupB">
            <Link to="/news/5">
              <Article
                imgUrl={blog02}
                date="2022-12-3 （三）- 2023-4-9（三） "
                text="冬雨．遠山．近海-宜蘭當代女性藝術家"
              />
            </Link>
            <Link to="/news/6">
              <Article
                imgUrl={blog03}
                date="2022-12-3 （三） - 2023-2-26 （日）"
                text="狂八〇 : 跨領域靈光出現的時代"
              />
            </Link>
            <Link to="/news/7">
              <Article
                imgUrl={blog04}
                date="2022-10-22（四） - 2023-2-26 （日）"
                text="minä perhonen/皆川明つづく"
              />
            </Link>
            <Link to="/news/8">
              <Article
                imgUrl={blog05}
                date="2022-11-05（二） - 2023-2-26 （日）"
                text="【問世間，情不為何物】2022台灣美術雙年展"
              />
            </Link>
          </div>
        </div>

        <div className="yipai__blog-heading">
          <h1 className="yipai__text gradient__text">尋找藝術品</h1>
        </div>
        <Link to="products">
          <h4 className="spaceblog-content">更多藝術品 ▶</h4>
        </Link>

        <Productsblog />
        <div className="yipai__blog-heading">
          <h1 className="yipai__text gradient__text">大藝術家們</h1>
        </div>
        <Link to="artist">
          <h4 className="spaceblog-content">看看更多大藝術家們 ▶</h4>
        </Link>

        <ArtistBlog />
        <div className="yipai__blog-heading">
          <h1 className="yipai__text gradient__text">立即探索展覽空間</h1>
        </div>
        <Link to="space">
          <h4 className="spaceblog-content">更多展覽空間 ▶</h4>
        </Link>
        <SpcaeBlog />
      </div>
    </div>
  );
};

export default Blog;
