import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const ref = useRef(null);
  const location = useLocation();
  const product = location.state?.product;
  const [image, setImage] = useState(product.images[0]);
  const clickedImage = (img) => {
    setImage(img);
    return img;
  };
  return (
    <div className="product-details">
      <div   style={{ display: "flex" }}>
        <div style={{ width: "50%", backgroundColor: "white" }}>
          <div>
            <img src={image} width={"500px"} alt="" />
          </div>
          <div>
            {product.images.length > 1 &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  width={"150px"}
                  onClick={() => clickedImage(img)}
                  alt=""
                />
              ))}
          </div>
        </div>

        <div style={{ width: "50%", backgroundColor: "white" }}>
          <div>{product.title}</div>
          <div>{product.category.name}</div>
          <div>{product.description}</div>
          <div>${product.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
