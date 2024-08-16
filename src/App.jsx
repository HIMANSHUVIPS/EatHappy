import React, { useState } from "react";
import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import foodData from "./Data.js";
import FoodContainer from "./components/Food/FoodContainer";

const App = () => {
  const [filterItem, setFilterItem] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('all');

  // Handle Search Logic
  const handleSearch = (e) => {
    const searchVal = e.target.value;
    console.log(searchVal);
    if (searchVal === "") {
      setFilterItem(null);
    } else {
      const filteredData = foodData.filter((item) =>
        item.foodName.toLowerCase().includes(searchVal.toLowerCase())
      );
      console.log(filteredData);
      setFilterItem(filteredData);
    }
  };

  // Handle Button Logic
  const handleBtn = (item) => {
    setSelectedBtn(item);

    if (item === 'all') {
      setFilterItem(null);
    } else {
      const filteredData = foodData.filter((food) =>
        food.foodType.toLowerCase().includes(item.toLowerCase())
      );
      setFilterItem(filteredData);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <NavBar handleSearch={handleSearch} handleBtn={handleBtn} />
        <FoodContainer data={filterItem || foodData} />
      </div>
    </div>
  );
};

export default App;
