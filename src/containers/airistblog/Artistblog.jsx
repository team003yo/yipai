import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";
import pic8 from "../../assets/pic8.jpg";
import pic9 from "../../assets/pic9.jpg";
import artistName from "../../assets/artist.png";
import "./artistblog.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ArtistBlog = () => {
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("第二個參數是空陣列");
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProduct() {
      let response = await axios.get("http://localhost:3001");
      setProduct(response.data);
      console.log(response.data);
    }
    getProduct();
    async function getUsers() {
      let response = await axios.get("http://localhost:3001");
      setUsers(response.data);
      console.log(response.data);
    }
    getUsers();
  }, []);
  return(
    <>
       {users.map((users, index) => {
      return(
        <div className="body">
          <div id="artistblog" className="grid">
            <div className="yipai__artistbox">
              <img src={pic1} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic2} alt="img2" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic3} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic4} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic5} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic6} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic7} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic8} alt="img" />
            </div>
            <div className="yipai__artistbox">
              <img src={pic9} alt="img" />
          </div>
        </div>
      </div>
        
      );
    })}
  </>
  )
};

export default ArtistBlog;
