import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  incrementFood,
  decrementFood,
  removeFood,
  selectCart,
} from "../../redux/slices/cartSlice";

const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(clearCart());
    }
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFood(id));
  };
  const handleIncrementCount = (id) => {
    dispatch(incrementFood(id));
  };
  const handleDecrementCount = (id) => {
    dispatch(decrementFood(id));
  };

  const itemsCart = (
    <ul>
      {items.map((i) => {
        return (
          <li>
            {i.title} Type: {i.type} Size: {i.size} count: {i.count} Total Food
            price: {i.totalItemPrice}
            <button onClick={() => handleIncrementCount(i.id)}>+</button>{" "}
            <button onClick={() => handleDecrementCount(i.id)}>-</button>{" "}
            <button onClick={() => handleRemoveItem(i.id)}>удалить</button>{" "}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <h1>Cart</h1>
      <button onClick={handleClearAll}>Clear all</button>
      {itemsCart}
      TOTAL: {totalPrice}
    </>
  );
};

export default Cart;
