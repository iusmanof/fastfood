import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/FastFoodItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../redux/slices/cartSlice";

function FastFoodItem({
  id,
  title,
  price,
  imgLink,
  size,
  type,
  dough,
  rating,
}) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const dispatch = useDispatch()
  const countFood = useSelector((state) => state.cart.countFood);

  const onClickButton = (id) => {
    dispatch(addFood(id))
  };

  const sizes = size.map((elem) => {
    return (
      <>
        <input type="radio" id={id + title} name={id + title} />
        <label htmlFor={id + title}>{elem}</label>
      </>
    );
  });

  const types = (
    <form>
      {type ? 'Type:' : ""}
      {type
        ? type.map((elem) => {
            return (
              <>
                <input type="radio" id={id + title} name={id + title} />
                <label htmlFor={id + title}>{elem}</label>
              </>
            );
          })
        : ""}
    </form>
  );
  const doughs = (
    <form>
      {dough ? 'Dough:' : ""}
      {dough
        ? dough.map((elem) => {
            return (
              <>
                <input type="radio" id={id + title} name={id + title} />
                <label htmlFor={id + title}>{elem}</label>
              </>
            );
          })
        : ""}
    </form>
  );

  return (
    <div className="food-block">
      <Link to={`${id}`}>
        <img src={imgLink} alt="imgLink" />
      </Link>
      <p>{title}</p>
      <p>Price: {price}</p>
      <form>
        Size:
        {sizes}
      </form>
      {types}
      {doughs}
      <p>Rating: {rating}</p>
      <button onClick={() => onClickButton({id, title, price, imgLink})}>Добавить {countFood}</button>
    </div>
  );
}

export default FastFoodItem;
