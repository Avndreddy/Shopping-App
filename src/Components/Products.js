import React, { useEffect, useState } from "react";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Products() {
  const [product, setProducts] = useState();
  const [viewmore, setViewMore] = useState(10);
  const [localCart, setLoaclCart] = useState([]);
  const handleViewMore = () => {
    setViewMore((prev) => prev + 10); // Show 10 more products (next 2 rows)
  };

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

  function sliceName(name, limit) {
    if (name.length > limit) {
      return name.slice(0, limit) + "...";
    }
    return name;
  }

  const AddProductsToCart = (product) => {
    const count = 1;
    const newCart = { id: product.id, count: count };
    if (!localCart) {
      setLoaclCart([newCart]);
      localStorage.setItem('Local_Cart',localCart)
    }
    if (localCart.find((localCart) => localCart.id == product.id)) {
      localCart.map((localCart) =>
        localCart.id == product.id ? localCart.count++ : localCart
      );
    } else {
      setLoaclCart([...localCart, newCart]);
      localStorage.setItem('Local_Cart',JSON.stringify(localCart))
    }
    
  };

  const RemoveProductsToCart = (product) => {
    if (localCart.find((localCart) => localCart.id == product.id)) {
      localCart.map((localCart) =>
        localCart.id == product.id ? localCart.count++ : localCart
      );
    } else {
      setLoaclCart([...localCart, ]);
      localStorage.setItem('Local_Cart',JSON.stringify(localCart))
    }
    
  };
  // const checkImageOrNot = async (url) => {
  //     try {
  //         const head = await axios.head(url);
  //         if (head.status === 200 && head.headers["Content-Type"].startsWith('image/')) {
  //             return true;
  //         } else {
  //             return true
  //         }
  //     } catch (err) {
  //         return true
  //     }
  // }

  return (
    <div>
      <h1>Products</h1>
      <div
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
        {product &&
          product.slice(0, viewmore).map((product, index) => (
            <div className="product-conatiner" key={index}>
              <div key={index}>
                <div>
                  {product.images[0].startsWith("[") ? (
                    <div
                      style={{
                        width: "200px",
                        height: "200px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                      }}
                    ></div>
                  ) : (
                    <img className="product-image" src={product.images[0]} />
                  )}
                </div>
                <div className="product-text">
                  {sliceName(product.title, 20)}
                </div>
                {product.category["name"] && (
                  <div className="product-category">
                    {product.category["name"]}
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
                          ${product.price + 20}
                        </s>
                      </span>
                    </div>
                    <div
                      className="cart-btn"
                      onClick={() => AddProductsToCart(product)}
                    >
                      <AddShoppingCartIcon
                        sx={{ color: "white" }}
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ))}
        
      </div>
      {product && product.length > viewmore && (
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              maxHeight: "fit-Content",
            }}
            onClick={handleViewMore}
          >
            viewmore
          </button>
        )}
    </div>
  );
}

export default Products;
