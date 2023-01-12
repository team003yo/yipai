import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'

const News = () => (
  <div>
    <h2>News</h2>
    <button>
      <Link to="NewsId">展覽活動</Link>
    </button>
  </div>
)

export default News
