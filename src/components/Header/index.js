import React, { useState, useContext } from "react";
import Menu from "../../assets/img/bars-solid.svg";
import Close from "../../assets/img/times-solid.svg";
import CartIcon from "../../assets/img/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";

import "./style.css";

export function Header() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [toggle, setToggle] = useState("false");

  function menuToggle() {
    setToggle(!toggle);
  }
  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Nike</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
