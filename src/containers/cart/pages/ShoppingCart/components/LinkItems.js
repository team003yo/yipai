import { Link } from 'react-router-dom'

function LinkItems(props) {
  return (
    <>
      <ul className="nav nav-pills nav-justified">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            單一個購物車
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/multiple-cart" className="nav-link">
            多個購物車
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/product-list" className="nav-link">
            產品列表
          </Link>
        </li>
      </ul>
    </>
  )
}

export default LinkItems
