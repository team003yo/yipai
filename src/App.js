import React from 'react';


import { Footer, Blog, Header,MyContent,Space,Products,About,Artist,Users,Cart,CartPart2,Login,Sell,ArtistBlog ,SpaceBlog,News, NewsId, ProductsDetail,ArtistDetail,SpaceDetail } from './containers';
import { Brand, Navbar, Carousel } from './components';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SellLogin from './containers/users/Sell/SellerLogin';

function App() {
  return(
    <BrowserRouter>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        
        {/* <Header /> */}
        <MyContent>
          <Routes>
            <Route index element={<Carousel />} /> 
            {/* <Route index element={<Header />} /> */}
          </Routes>
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='space' element={<Space />} />
            <Route path='/space/SpaceDetail' element={<SpaceDetail />} />
            <Route path='products' element={<Products />} />
            <Route path='/products/ProductsDetail' element={<ProductsDetail />} />
            <Route path='about' element={<About />} />
            <Route path='artist' element={<Artist />} />
            <Route path='artist/ArtistDetail' element={<ArtistDetail />} />
            <Route path='users' element={<Users />} />            
            <Route path='/users/BuyLogin' element={<Login />} />            
            <Route path='/users/SellLogin' element={<SellLogin />} />            
            <Route path='cart' element={<Cart />} />
            <Route path='/cart/CartPart2' element={<CartPart2 />} />
            <Route path="/news/newsId" element={<NewsId />} />
            <Route path="news" element={<News />} />
          </Routes>  
        </MyContent>
      </div>
        <Brand />
        <Routes>
          <Route path='artistblog' element={<ArtistBlog />} />
          <Route path='spaceblog' element={<SpaceBlog />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    
  )
}
  

export default App;
