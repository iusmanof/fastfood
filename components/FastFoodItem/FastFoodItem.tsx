import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FastFoodItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFood, selectCartItemById } from "../../redux/slices/cart/selectors";

interface FastFoodItemProps {
  id: number;
  title: string;
  price: number;
  imgLink: string;
  size: number[] | string[];
  type: string[];
  rating: number;
}

const FastFoodItem: React.FC<FastFoodItemProps> = ({
  id,
  title,
  price,
  imgLink,
  size,
  type,
  rating,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [typeChoosed, setTypeChoosed] = React.useState<number | string>(
    type[0]
  );
  const [sizeChoosed, setSizeChoosed] = React.useState<number | string>(
    size[0]
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickButton = ({id,
    title,
    price,
    imgLink,
    size,
    type,
    rating}: FastFoodItemProps
    
  ) => {
    dispatch(addFood({id,
      title,
      price,
      imgLink,
      size,
      type,
      rating}));
  };

  const sizes = (
    <form>
      Size:
      {size.map((elem, i) => {
        return (
          <div key={i} onChange={() => setSizeChoosed(size[i])}>
            {i === 0 ? (
              <input
                type="radio"
                id={id + title}
                name={id + title}
                defaultChecked
              />
            ) : (
              <input type="radio" id={id + title} name={id + title} />
            )}
            <label htmlFor={id + title}>{elem}</label>
          </div>
        );
      })}
    </form>
  );

  const types = (
    <form>
      {type ? "Type:" : ""}
      {type
        ? type.map((elem, i) => {
            return (
              <div key={i} onChange={() => setTypeChoosed(type[i])}>
                {i === 0 ? (
                  <input
                    type="radio"
                    id={id + title}
                    name={id + title}
                    defaultChecked
                  />
                ) : (
                  <input type="radio" id={id + title} name={id + title} />
                )}
                <label htmlFor={id + title}>{elem}</label>
              </div>
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
      {sizes}
      {types}
      <p>Rating: {rating}</p>
      <button
        onClick={() =>
          onClickButton({id, title, price, imgLink, size, type, rating})
        }
      >
        Добавить {addedCount}
      </button>
    </div>
  );
};

export default FastFoodItem;
