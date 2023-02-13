import pic5 from "../../assets/pic5.jpg";
import likemore1 from "../../assets/likemore1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function UMayBeLike() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // 这里可以换成您的实际数据源
    async function getProducts() {
      let response = await axios.get(`http://localhost:3001/maybelike`);
      setProducts(response.data);
      // console.log(response.data);
    }
    
    const data = [{ id: products.id, img_file: products.img_file,name:products.artist},];
    
    const shuffledProducts = shuffleArray(data).slice(0,1);
    setProducts(shuffledProducts);
    getProducts();
  }, []);
  


  return (
    <>
        <div className="cart__products">
      {products.map((product) => (
          <div className="cart__products-img">
            <Link to={`/products/${product.id}`}>
              <img key={product.id} src={product.img_file} alt={product.img_file} />
            </Link>
            <p>{product.artist}<br/>的作品</p>
          </div>

      ))}
        </div>
    </>
  )

}



export default UMayBeLike;
