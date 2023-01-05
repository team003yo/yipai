import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="yipai__blog-container_article">
    <div className="yipai__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="yipai__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>查看更多</p>
    </div>
  </div>
);

export default Article;
