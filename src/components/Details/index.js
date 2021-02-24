import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import { Colors } from "../Colors";
import "./style.css";

export function Details(props) {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <>
      {products
        .filter((item) => {
          return item._id === props.match.params.id;
        })
        .map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addCart(item._id)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
