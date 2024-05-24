import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/FastFoodItem.scss";

function FastFoodItem({ id, title, price, imgLink }) {
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickButton = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="food-block">
       <Link to={`${id}`}><img src={imgLink} alt="imgLink" /></Link>
      <p>{title}</p>
      <p>Price: {price}</p>
      <button onClick={onClickButton}>Добавить {pizzaCount}</button>
    </div>
  ); 
}

export default FastFoodItem;
