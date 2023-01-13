import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeHeader.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__top}>
        <Link to="/logowanie" className={styles.login_link}>
          Zaloguj
        </Link>
        <Link to="/rejestracja" className={styles.login_link}>
          Załóż konto
        </Link>
      </div>
      <div>
        <nav className={styles.nav}>
          <li className={styles.nav_item}>Start</li>
          <li className={styles.nav_item}>O co chodzi?</li>
          <li className={styles.nav_item}>O nas</li>
          <li className={styles.nav_item}>Funadacja i organizacje</li>
          <li className={styles.nav_item}>Kontakt</li>
        </nav>
      </div>
    </div>
  );
};

export default HomeHeader;
