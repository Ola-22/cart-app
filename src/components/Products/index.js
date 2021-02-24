import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "./style.css";

export function Product() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  return (
    <div id="product">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt="" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <button onClick={() => addCart(product._id)}>Add to card</button>
          </div>
        </div>
      ))}
    </div>
  );
}
