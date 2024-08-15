import React from 'react'
import styles from "./Item.module.css";
const Item = ({pizza}) => {
  return (
    <>
    <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      <div className={styles.foodItem}>
        <div className={styles.left}>
          <img src={pizza} alt=""/>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h1>Pizza</h1>
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              nesciunt fugiat rem eveniet esse eum.
            </p>
          </div>
          <div className={styles.amount}>
            <button type="button">$10.00</button>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item