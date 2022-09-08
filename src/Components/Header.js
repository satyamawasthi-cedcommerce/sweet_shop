import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    // returning JSX
    <>
      <header>
        <div className="HeaderDiv">
          <div className="logoDiv">
            {/* navigation */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src="./logo_sugar_n_Sweets.png"
                alt="...."
                className="logo"
              />
              <h3 className="brandName">Sugar n Sweets</h3>
            </Link>
          </div>
          <div className="headerContentDiv">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <h2>About</h2>
            </Link>
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <h2>Shop</h2>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <h2>
                <i class="fa-solid fa-cart-shopping"></i><sup>{props.cartArr.length}</sup>
              </h2>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
