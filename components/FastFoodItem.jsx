import React, { useState } from "react";
import "../style/FastFoodItem.scss";

function FastFoodItem({ title, price }) {
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    <div className="food-block">
      <p>{title}</p>
      <p>Price: {price}</p>
      <button onClick={() => { setPizzaCount( pizzaCount + 1)}}>Добавить {pizzaCount}</button>
    </div>
  );
}

export default FastFoodItem;
