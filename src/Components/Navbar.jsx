import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div >
      <nav className="navbar navbar-expand-md navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            ECOMMERCE
          </NavLink>

          <div className="navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/products">
                  Produtos
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark ">
                <BsFillCartFill className="fa fa-sign-in me-1" /> ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;