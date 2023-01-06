import React from 'react';
import Article from '../../components/article/Article';
import ArtistBlog from '../airistblog/Artistblog';
import Productsblog from '../productsblog/Productsblog';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="yipai__blog section__padding" id="blog">
    <div className="yipai__blog-heading">
      <h1 className="gradient__text">最新消息｜當期展覽及新展預告</h1>
    </div>
    <div className="yipai__blog-container">
      <div className="yipai__blog-container_groupA">
        <Article imgUrl={blog01} date="2023 01/01" text="Byen Ungpil - SOMEONE 2021_001 Original" />
      </div>
      <div className="yipai__blog-container_groupB">
        <Article imgUrl={blog02} date="2023 01/01" text="Byen Ungpil - SOMEONE 2021_001 Original" />
        <Article imgUrl={blog03} date="2023 01/01" text="Byen Ungpil - SOMEONE 2021_001 Original" />
        <Article imgUrl={blog04} date="2023 01/01" text="Byen Ungpil - SOMEONE 2021_001 Original" />
        <Article imgUrl={blog05} date="2023 01/01" text="Byen Ungpil - SOMEONE 2021_001 Original" />
      </div>
    </div>
    <div className="yipai__blog-heading">
      <h1 className="yipai__text gradient__text">尋找藝術品</h1>
    </div>
    <Productsblog />
    <div className="yipai__blog-heading">
      <h1 className="yipai__text gradient__text">大藝術家們</h1>
    </div>
    <ArtistBlog />

  </div>
);

export default Blog;
