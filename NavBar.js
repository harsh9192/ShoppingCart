import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { BsBagHeartFill } from "react-icons/bs";

const NavBar = ({ cart, wishlist }) => {
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
          </div>
          <Link to={"/cart"} className="cart"> 
            <button type="button" className="btn btn-primary position-relative">
              <BsCartCheckFill />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
          <Link to={"/wishlist"} className="wish-list">
          <button type="button" className="btn btn-success position-relative"> 
            <BsBagHeartFill/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishlist.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
