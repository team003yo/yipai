import React from 'react';

import { Footer, Blog, Header,MyContent,Space,Products,About,Artist,Users,Cart,Login,Sell,ArtistBlog ,SpaceBlog,News, NewsId } from './containers';
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
            <Route path='products' element={<Products />} />
            <Route path='about' element={<About />} />
            <Route path='artist' element={<Artist />} />
            <Route path='users' element={<Users />} />            
            <Route path='/users/BuyLogin' element={<Login />} />            
            <Route path='/users/SellLogin' element={<SellLogin />} />            
            <Route path='cart' element={<Cart />} />
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
