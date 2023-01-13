import React from "react";
import { Link } from "react-scroll";

const HomeHeader = () => {
  return (
    <div className="menu">
      <div className="menu__top">
        <Link to="/logowanie" className="login-btn">
          Zaloguj
        </Link>
        <Link to="/rejestracja" className="login-btn">
          Załóż konto
        </Link>
      </div>
      <div>
        <nav className="nav">
          <li className="nav-item">Start</li>
          <li className="nav-item">O co chodzi?</li>
          <li className="nav-item">O nas</li>
          <li className="nav-item">Funadacja i organizacje</li>
          <li className="nav-item">Kontakt</li>
        </nav>
      </div>
    </div>
  );
};

export default HomeHeader;
