import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Footer,
  Blog,
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
  News,
  NewsId,
  ProductsDetail,
  ArtistDetail,
  SpaceDetail,
  Register,
  SellRegister,
  ProductList,
} from "./containers";
import { Brand, Navbar, ScrollToTop, NotFound } from "./components";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellLogin from "./containers/users/Sell/SellerLogin";
// Cart Route
import { CartProvider } from "./containers/cart/utils/useCart";
import { SecondCartProvider } from "./containers/cart/utils/useSecondCart";
import { HeadImg } from "./containers/users/HeadImg";
import ProtectedRoutes from "./containers/users/utils/ProtectedRoutes";
import SellerHome from "./containers/users/Sell/SellerHome";

function App() {

  const [User, setUser] = useState([]); //記錄數值
  const [UserData2, setUserData2] = useState([]); //記錄數值
  useEffect(() => {
    async function getMember2() {
      let response2 = await axios.get(`http://localhost:3001/api/members`, {
        withCredentials: true,
      });
      // UserInputData.current = response2.data[0];
      setUser(response2.data.users_valid_role
        );
      console.log(response2.data.users_valid_role
        );
    }
    getMember2();
  }, []);
  console.log(User);

  // console.log(User.data);
    //使用者登入狀態       是               使用者權限
    const user = { login: true, permission: [User] };

    //使用者 user 與 admin
    const Permission = {
      User: User,
      Admin: "Admin",
    };
  
  console.log(Permission.User);

  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <div className="gradient__bg">
              {/* 標題列 */}
              <Navbar />
              <MyContent>
                {/* 頁面捲動 */}
                <ScrollToTop>
                  <Routes>
                    {/* 首頁 */}
                    <Route path="/" element={<Blog />} />
                    {/* 空間頁面 */}
                    <Route path="/space" element={<Space />} />
                    <Route path="/space/:spaceId" element={<SpaceDetail />} />
                    {/* 商品頁面 */}
                    <Route path="products" element={<Products />} />
                    <Route
                      path="/products/:productId"
                      element={<ProductsDetail />}
                    />
                    <Route path="product-list" element={<ProductList />} />
                    {/* 關於頁面 */}
                    <Route path="about" element={<About />} />
                    {/* 藝術家頁面 */}
                    <Route path="artist" element={<Artist />} />
                    <Route
                      path="/artist/:artistId"
                      element={<ArtistDetail />}
                    />
                    {/* 買賣家登入頁面 */}
                    <Route path="users" element={<Users />} />
                    <Route path="/users/BuyLogin" element={<Login />} />
                    <Route path="/users/Register" element={<Register />} />
                    <Route path="/users/LoginTo" element={<HeadImg />} />
                    <Route path="/users/SellLogin" element={<SellLogin />} />
                    <Route
                      path="/users/SellRegister"
                      element={<SellRegister />}
                    />
                    <Route
                      path="/users/ArtistLoginTo"
                      element={<SellerHome />}
                    />
                    {/* 登入保護機制 user={user} 使用者身分 Permission.XX 可進入頁面的權限者 */}
                    <Route
                      element={
                        <ProtectedRoutes
                          user={user}
                          Permission={[Permission.Admin, Permission.User]}
                        />
                      }
                    >
                      {/* 購物車部分 */}
                      <Route path="cart" element={<Cart />} />
                      <Route path="/cart/CartPart2" element={<CartPart2 />} />
                      <Route path="/cart/CartPart3" element={<CartPart3 />} />
                    </Route>
                    {/* 最新消息頁面 */}
                    <Route path="news" element={<News />} />
                    <Route path="/news/:newsId" element={<NewsId />} />
                    <Route />
                    {/* 錯誤頁面顯示 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ScrollToTop>
              </MyContent>
            </div>
            {/* 贊助商 */}
            <Brand />
          </div>
          {/* 頁腳 */}
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </SecondCartProvider>
  );
}

export default App;
