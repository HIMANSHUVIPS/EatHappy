import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav>
      <div className={styles.top_nav}>
        <div className={styles.logo}>
          E<span>a</span>tH<span>a</span>ppy
        </div>
        <div className={styles.links}>
          <a href="#">All</a>
          <a href="#">BreakFast</a>
          <a href="#">Lunch</a>
          <a href="#">Dinner</a>
        </div>
        <div className={styles.nav_search}>
          <input type="search" name="" id="" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
