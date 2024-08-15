import React from "react";
import styles from "./FoodContainer.module.css";
import Item from "./Item";
const FoodContainer = ({pizza}) => {
  return (
    <div className={styles.foodContainer}>
      <Item pizza = {pizza}/>
    </div>
  );
};

export default FoodContainer;
