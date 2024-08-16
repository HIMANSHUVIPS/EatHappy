import React from "react";
import styles from "./NavBar.module.css";
const NavBar = ({ handleSearch,handleBtn}) => {
  return (
    <nav>
      <div className={styles.top_nav}>
        <div className={styles.logo}>
          E<span>a</span>tH<span>a</span>ppy
        </div>
        <div className={styles.links}>
          <a href="#" onClick={()=>handleBtn('all')}>All</a>
          <a href="#" onClick={()=>handleBtn('breakfast')}>BreakFast</a>
          <a href="#" onClick={()=>handleBtn('lunch')}>Lunch</a>
          <a href="#" onClick={()=>handleBtn('dinner')}>Dinner</a>
        </div>
        <div className={styles.nav_search}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
