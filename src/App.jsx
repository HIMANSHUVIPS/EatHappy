import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import pizza from "./assets/pizza.jpg";
import FoodContainer from "./components/Food/FoodContainer";
const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <NavBar/>
        <FoodContainer pizza={pizza}/>
      </div>
    </div>
  );
};

export default App;
