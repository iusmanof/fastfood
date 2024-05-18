import React, { useState } from "react";
import "../style/FastFoodItem.scss";

function FastFoodItem({ title, price, imgLink }) {
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickButton = () => {
    setPizzaCount(pizzaCount + 1);
  };
  return (
    <div className="food-block">
      <img src={imgLink} alt="imgLink" />
      <p>{title}</p>
      <p>Price: {price}</p>
      <button onClick={onClickButton}>Добавить {pizzaCount}</button>
    </div>
  );
}

export default FastFoodItem;
