import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  incrementFood,
  decrementFood,
  removeFood,
  selectCart,
} from "../../redux/slices/cart/selectors";
import clsx from "clsx";
import "./Cart.scss";
import {ICartProps} from  './type'


const Cart = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(clearCart());
    }
  };
  const handleRemoveItem = (id: number) => {
    dispatch(removeFood(id));
  };
  const handleIncrementCount = (id: number) => {
    dispatch(incrementFood(id));
  };
  const handleDecrementCount = (id: number) => {
    dispatch(decrementFood(id));
  };

  const itemsCart = (
    <ul>
      {items.map((i: ICartProps) => {
        return (
          <li>
            {i.title} Type: {i.type} Size: {i.size} count: {i.count} Total Food
            price: {i.totalItemPrice}
            <button onClick={() => handleIncrementCount(i.id)}>+</button>{" "}
            <button disabled={ i.count === 1 }className={clsx("btn_minus", {"btn_minus-disabled": i.count === 1 })} onClick={() => handleDecrementCount(i.id)}>-</button>{" "}
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
