import React from "react";
import styles from "./Item.module.css";
const Item = ({ data }) => {
  return (
    <>
      {data.map(({ id,foodName, foodInfo, foodImg, price }) => (
        <div className={styles.foodItem} key={id}>
          <div className={styles.left}>
            <img src={foodImg} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>
              <h1>{foodName}</h1>
            </div>
            <div className={styles.info}>
              <p>{foodInfo}</p>
            </div>
            <div className={styles.amount}>
              <button type="button">{price}</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
