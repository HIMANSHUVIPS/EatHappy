import React, { useState } from "react";
import styles from "./FoodContainer.module.css";
import Item from "./Item";
const FoodContainer = ({data}) => {
  return (
    <div className={styles.foodContainer}>
      <Item data = {data}/>
    </div>
  );
};

export default FoodContainer;
