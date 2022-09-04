import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {

  const {cartItem}	= useSelector(state => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-primary sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to='/cart'>
                Cart
				{
					cartItem.length > 0 && <span className="badge text-bg-danger">{cartItem.length}</span>
				}
				
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;
