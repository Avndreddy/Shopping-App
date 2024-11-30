import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import "../Styles/product.css";

function Product() {
  const ref = useRef(null);
  const location = useLocation();
  const product = location.state?.product;
  const [image, setImage] = useState(product.images[0]);
  const size = ["Size:", "S", "M", "L", "XL", "XXL"];
  const color = ["red", "blue", "white", "black", "gray"];

  const clickedImage = (img) => {
    setImage(img);
    return img;
  };
  return (
    <div className="product-details">
      <div className="product-containers">
        <div className="product-images">
          <div className="product-images-img">
            {product.images[0].startsWith("[") ? (
              <div
                style={{
                  width: "650px",
                  height: "650px",
                  backgroundColor: "black",
                  borderRadius: "5px",
                }}
              ></div>
            ) : (
              <img className="product-images-img" src={image} alt="No Img" />
            )}
          </div>
          <div className="product-image-subimg-container">
            {product.images.length > 1 &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="product-image-subimg"
                  onClick={() => clickedImage(img)}
                  alt=""
                />
              ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-info-category">{product.category.name}</div>
          <div className="product-info-title">{product.title}</div>

          <div className="product-info-price">
            <span className="product-info-final-price">${product.price}</span>
            <span style={{ fontWeight: "600" }}>
              <s style={{ color: "gray", fontSize: "20px" }}>
                ${product.price + 10}
              </s>{" "}
              <span style={{ color: "red" }}>
                {Math.trunc((10 / (product.price + 10)) * 100)}%OFF
              </span>
            </span>
            <span className="product-info-rating">({(Math.random()*(5-1)+1).toFixed(1)} rating)</span>
            {}
          </div>
          <div className="product-info-colur">
            Colour:
            {color.map((color, index) => (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                  borderRadius: "50px",
                  border: "1px solid black",
                }}
              ></div>
            ))}
          </div>
          {product.category.name === "Cloths" ||
            (product.category.name === "Shoes" && (
              <div className="product-info-size">
                {size.map((size, index) => (
                  <span>{size}</span>
                ))}
              </div>
            ))}

          <div className="product-info-AddToCart">Add to Cart</div>
          <div className="product-info-description">{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
