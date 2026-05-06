import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api.freeapi.app/api/v1/public/randomproducts";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function fetchProducts() {
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setProducts(data.data.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="app">
      {products.length === 0 ? (
        <button className="main-btn" onClick={fetchProducts}>
          {loading ? "Loading..." : "Fetch Products"}
        </button>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />

              <div className="product-content">
                <h2>{product.title}</h2>

                <p className="description">{product.description}</p>

                <div className="product-footer">
                  <span className="price">${product.price}</span>

                  <span className="category">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
