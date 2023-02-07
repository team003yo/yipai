import React from "react";

import AlexisLeBorgne from "../../assets/AlexisLeBorgne.png";
import JimMeskhi from "../../assets/JimMeskhi.png";
import HugoRaffrayAirist from "../../assets/HugoRaffrayAirist.jpeg";
import RicardoValbuena from "../../assets/RicardoValbuena.png";
import KristinKossi from "../../assets/KristinKossi.png";
import GalaBiermann from "../../assets/GalaBiermann.png";
import KatherineRhodesFields from "../../assets/KatherineRhodesFields.png";
import EmanuelaAssenza from "../../assets/EmanuelaAssenza.png";
import MatTTtam from "../../assets/MatTTtam.png";
import "./artistblog.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ArtistBlog = () => {
  const [product, setProduct] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("第二個參數是空陣列");
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getProduct() {
      let response = await axios.get("http://localhost:3001");
      setProduct(response.data);
      // console.log(response.data);
    }
    getProduct();
    async function getUsers() {
      let response = await axios.get("http://localhost:3001");
      setUsers(response.data);
      // console.log(response.data);
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
            <Link to="/artist/32"><img src={AlexisLeBorgne} alt="img" /></Link>
              
            </div>
            <div className="yipai__artistbox">
              <Link to="/artist/53"><img src={JimMeskhi} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox">
            <Link to="/artist/52"><img src={HugoRaffrayAirist} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox">
            <Link to="/artist/44"><img src={RicardoValbuena} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox yipai__artistbox-hide">
            <Link to="/artist/59"><img src={KristinKossi} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox yipai__artistbox-hide">
            <Link to="/artist/51"><img src={GalaBiermann} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox yipai__artistbox-hide">
            <Link to="/artist/57"><img src={KatherineRhodesFields} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox yipai__artistbox-hide">
            <Link to="/artist/46"><img src={EmanuelaAssenza} alt="img" /></Link>
            </div>
            <div className="yipai__artistbox yipai__artistbox-hide">
            <Link to="/artist/66"><img src={MatTTtam} alt="img" /></Link>
          </div>
        </div>
      </div>
        
      );
    })}
  </>
  )
};

export default ArtistBlog;
