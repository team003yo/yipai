import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

// 要使用能有active css效果的NavLink元件
import { NavLink, Link } from 'react-router-dom'

import CartIcon from './CartIcon'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-BS5-Router6
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* 利用as屬性來作選單link的整合 */}
              {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}
              <Nav.Link as={NavLink} to="/">
                購物車
              </Nav.Link>
              <Nav.Link as={NavLink} to="product-list">
                商品列表
              </Nav.Link>
              <Nav.Link as={NavLink} to="multiple-cart">
                多購物車範例
              </Nav.Link>
            </Nav>
            <CartIcon />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar
