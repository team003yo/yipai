import React from "react";

import {
  Footer,
  Blog,
  Header,
  MyContent,
  Space,
  Products,
  About,
  Artist,
  Users,
  Cart,
  CartPart2,
  CartPart3,
  Login,
  Sell,
  ArtistBlog,
  SpaceBlog,
  News,
  NewsId,
  ProductsDetail,
  ArtistDetail,
  SpaceDetail,
  Register,
  SellRegister,
  ProductList,
  MainContent,
  ScrollToTop
} from "./containers";
import { Brand, Navbar, Carousel, ScrollToTop } from "./components";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellLogin from "./containers/users/Sell/SellerLogin";
// Cart Route
import SingleCart from "./containers/cart/pages/ShoppingCart/SingleCart";
import MultipleCart from "./containers/cart/pages/ShoppingCart/MultipleCart";
import { CartProvider } from "./containers/cart/utils/useCart";
import { SecondCartProvider } from "./containers/cart/utils/useSecondCart";

function App() {
  return (
  <SecondCartProvider localStorageKey="secondCart">
    <CartProvider>
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
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
          <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/space" element={<Space />} />
              <Route path="/space/:spaceId" element={<SpaceDetail />} />
              <Route path="products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductsDetail />} />
              <Route path="about" element={<About />} />
              <Route path="artist" element={<Artist />} />
              <Route path="/artist/ArtistDetail" element={<ArtistDetail />} />
              <Route path="users" element={<Users />} />
              <Route path="/users/BuyLogin" element={<Login />} />
              <Route path="/users/SellLogin" element={<SellLogin />} />
              <Route path="/users/Register" element={<Register />} />
              <Route path="/users/SellRegister" element={<SellRegister />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/cart/CartPart2" element={<CartPart2 />} />
              <Route path="/cart/CartPart3" element={<CartPart3 />} />
              <Route path="/cart-test" element={<SingleCart />} />
              <Route path="multiple-cart" element={<MultipleCart />} />
              <Route path="product-list" element={<ProductList />} />
            <Route path="/news/:newsId" element={<NewsId />} />
              <Route path="news" element={<News />} />
          </Routes>  
          </ScrollToTop>

        </MyContent>
      </div>
        <Brand />
        <Routes>
          <Route path="artistblog" element={<ArtistBlog />} />
          <Route path="spaceblog" element={<SpaceBlog />} />
        </Routes>


        
      </div>
      <Footer />
    </BrowserRouter>
    </CartProvider>
    </SecondCartProvider>
  );
}
  

export default App;
