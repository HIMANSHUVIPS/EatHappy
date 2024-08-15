import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import pizza from "./assets/pizza.jpg";
const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <NavBar/>
        <div className={styles.foodContainer}>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          <div className={styles.foodItem}>
            <div className={styles.left}>
              <img src={pizza} alt="" srcset="" />
            </div>
            <div className={styles.right}>
              <div className={styles.heading}>
                <h1>Pizza</h1>
              </div>
              <div className={styles.info}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt fugiat rem eveniet esse eum.</p>
              </div>
              <div className={styles.amount}>
                <button type="button">$10.00</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
