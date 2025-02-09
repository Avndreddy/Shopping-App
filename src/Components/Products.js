import "../Styles/Product_Cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { Grid2 } from "@mui/material";

function Products() {
  const [product, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [viewmore, setViewMore] = useState(10);
  const [localCart, setLoaclCart] = useState("");

  const handleViewMore = () => {
    setViewMore((prev) => prev + 10); // Show 10 more products (next 2 rows)
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  function sliceName(name, limit) {
    if (name.length > limit) {
      return name.slice(0, limit) + "...";
    }
    return name;
  }

  const AddProductsToCart = async (product) => {
    const count = 1;
    const newCart = { ...product, count: count };
    if (localCart === "") {
      setLoaclCart([newCart]);
      // localStorage.setItem("Local_Cart", JSON.stringify(localCart));
    }
    if (
      localCart &&
      localCart.find((localCart) => localCart.id == product.id)
    ) {
      localCart.map((localCart) =>
        localCart.id == product.id ? localCart.count++ : localCart
      );
      setLoaclCart(localCart);
    } else {
      setLoaclCart([...localCart, newCart]);
      // localStorage.setItem("Local_Cart", JSON.stringify(localCart));
    }
  };
  localStorage.setItem("Local_Cart", JSON.stringify(localCart));

  const RemoveProductsToCart = (product) => {
    if (
      localCart &&
      localCart.find(
        (localCart) => localCart.id == product.id && localCart.count >= 1
      )
    ) {
      localCart.map((localCart) =>
        localCart.id == product.id ? localCart.count-- : localCart
      );
      console.log(localCart);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div container 
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "95%",
          margin: "0 auto",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* <div style={{display:"flex",flexWrap:"wrap",width:"max-container",gap:"4px"}}>
          {
            categories && categories.map((category,index) => <div style={{display:"flex",padding:"8px",backgroundColor:"white"}}>{category.name}</div>)
          }
        </div> */}
<div container spacing={2}>
        {product &&
          product.slice(0, viewmore).map((product, index) => (
            <div size={{ xs: 6, md: 8 }} className="product-conatiner" key={index}>
              <div
                key={index}
                onClick={() =>
                  navigate(`/product/${product.id}`, { state: { product } })
                }
              >
                <div>
                  {product.images[0].startsWith("[") ? (
                    <img
                      className="product-no-image"
                      src="https://api.algobook.info/v1/randomimage?category=backgrounds"
                    />
                  ) : (
                    <img className="product-image" src={product.images[0]} />
                  )}
                </div>
                <div className="product-text">
                  {product.title ? sliceName(product.title, 20): "Not Titeled"}
                </div>
                {product.category["name"] && (
                  <div className="product-category">
                    {product.category["name"] == "undefined" ? "Other" : product.category["name"]}
                  </div>
                )}
                <div className="product-price">
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="price-text">Price</span>
                      <span>
                        ${product.price}{" "}
                        <s
                          className="price-text"
                          style={{ fontWeight: "normal" }}
                        >
                          ${product.price + 10}
                        </s>
                      </span>
                    </div>
                    {localCart === "" ? (
                      <div
                        className="cart-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          AddProductsToCart(product);
                        }}
                      >
                        <AddShoppingCartIcon sx={{ color: "white" }} />
                      </div>
                    ) : (
                      <div style={{ display: "flex", gap: "2px" }}>
                        {localCart &&
                        localCart.find(
                          (localCart) =>
                            localCart.id == product.id && localCart.count >= 1
                        ) ? (
                          <div
                            className="cart-btn"
                            style={{
                              padding: "2px",
                              backgroundColor: "black",
                              color: "white",
                              cursor: "pointer",
                              textAlign: "center",
                            }}
                          >
                            --
                          </div>
                        ) : (
                          {}
                        )}
                        <div
                          className="cart-btn"
                          onClick={(event) => {
                            event.stopPropagation();
                            AddProductsToCart(product);
                          }}
                        >
                          <AddShoppingCartIcon sx={{ color: "white" }} />
                        </div>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}</div>
      </div>
      {product && product.length > viewmore && (
        <button className="view-more" onClick={handleViewMore}>
          viewmore
        </button>
      )}
    </div>
  );
}

export default Products;
