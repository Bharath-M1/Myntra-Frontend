import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
export const Cart = () => {
  return (
    <div>
      <li className="nav-link text-center mr-4">
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <i className="fas fa-shopping-bag"></i>
          <br />
          <span className="font-weight-bold text-dark">Bag</span>
          {/* <span className="background">0</span> */}
        </Link>
      </li>
    </div>
  );
};
