import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
    const [product, setProducts] = useState();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products')
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts();
    }, []);


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
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "95%", margin: "0 auto",  justifyContent: "center", gap: "16px", }}>
                {product &&
                    product.map((product, index) =>
                        <div className="product-conatiner" key={index}>
                            <div key={index}>
                                <div>
                                    {
                                    product.images[0].startsWith('[')? 
                                    <div style={{ width: "150px", height: "150px", backgroundColor: "black",borderRadius: "5px" }}></div> 
                                    : <img src={(product.images[0])} style={{ borderRadius: "5px" }} width={"150px"} />
                                    }
                                </div>
                                <div className="product-text">{product.title}</div>
                                <div className="product-text">${product.price}</div>
                                {product.category['name'] && (<div className="product-text">{product.category['name']}</div>)}
                            </div></div>
                    )}
            </div>
        </div>
    );
}

export default Products;