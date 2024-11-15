import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ numberOfItems }) => {
  return (
    <header>
      <div className="container">
        <div>
          <h1 className="header_logo">
            <FontAwesomeIcon icon={faClapperboard} style={{ color: '#F4CA34'}} className="movie_logo" />
            Movie Posters
          </h1>
        </div>
        <ul className="header_links">
          <li className="header_list">
            <Link to="/" className="header_link">
              Home
            </Link>
          </li>
          <li className="header_list">
            <Link to="/Posters" className="header_link">
              Posters
            </Link>
          </li>
          <li className="header_list">
            <Link to="/Login" className="header_link">
              Login
            </Link>
          </li>
          <li className="header_list">
            <Link to="/Register" className="header_link">
              Register
            </Link>
          </li>
          <li className="header_list">
            <Link to="/Cart" className="header_link-primary">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            {
              numberOfItems > 0 && <span className='cart__length'>{numberOfItems}</span>
            }
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
