import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";



const Navbar = ({onSearch,cartItemCount}) => {
  const [serachQuery,setSercachQuery]=useState('');
  
  const onToggleClick=()=>{
    //alert("click")
     document.getElementById("menu").classList.toggle("navbarSupportedContent");
     document
       .getElementById("nav")
       .classList.toggle("change");
  }

  const handleSubmit=()=>{
    if(serachQuery.trim().length){
      onSearch(serachQuery.trim())
    }
    setSercachQuery('');
  }
  let location=useLocation();
  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-dark  bg-primary py-3q fixed-top bg-body-tertiary"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            id="menu"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onToggleClick}
          >
            <span id="nav" className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search products..."
                aria-label="Search"
                value={serachQuery}
                onChange={(e) => setSercachQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </div>
            <div className="px-3">
              <Link className="link headerCart" to="/cart">
                {cartItemCount > 0 && (
                  <div className="cartCounter">
                    {cartItemCount <= 9 ? cartItemCount : "9+"}
                  </div>
                )}
                <i className={`fa-solid fa-cart-shopping fa-xl cartImg`}></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


