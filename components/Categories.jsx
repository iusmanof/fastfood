// import React from "react"

import { useEffect, useState } from "react";
import "../style/Categories.scss";

const CategoryItem = ({
  categoryName,
  categoryNameStatus,
  categoryCurrentStatus,
  setActive,
  categoryHandler
}) => {
  return (
    <li
      className={categoryCurrentStatus === categoryNameStatus ? "active" : ""}
      onClick={() => { 
        setActive(categoryNameStatus) 
        categoryHandler(categoryNameStatus)
      }}
    >
      {categoryName}
    </li>
  );
};

const Categories = ({ categoryHandler }) => {
  const [active, setActive] = useState("");
  const categoriesFastFood = [
    { id: 0, categoryName: "Все", categoryNameStatus: "" },
    { id: 1, categoryName: "Пицццы", categoryNameStatus: "pizza" },
    { id: 2, categoryName: "Бургеры", categoryNameStatus: "burger" },
    { id: 3, categoryName: "Напитки", categoryNameStatus: "drinks" },
    { id: 4, categoryName: "Картошка фри", categoryNameStatus: "fry" },
    { id: 5, categoryName: "Поп-корн", categoryNameStatus: "popcorn" },
  ];
  return (
    <>
      <div className="category">
        <ul>
          {categoriesFastFood.map((elementFastFood) => {
            return (
              <CategoryItem
                key={elementFastFood.id}
                categoryName={elementFastFood.categoryName}
                categoryNameStatus={elementFastFood.categoryNameStatus}
                categoryCurrentStatus={active}
                setActive={setActive}
                categoryHandler={categoryHandler}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;

{
  /* <li
className={active === "pizza" ? "active" : ""}
onClick={() => setActive("pizza")}
>
Pizzas
</li>
<li
className={active === "burger" ? "active" : ""}
onClick={() => setActive("burger")}
>
Burgers
</li>
<li
className={active === "drink" ? "active" : ""}
onClick={() => setActive("drink")}
>
{" "}
Drinks
</li>
<li
className={active === "fry" ? "active" : ""}
onClick={() => setActive("fry")}
>
Frys
</li>
<li
className={active === "popcorn" ? "active" : ""}
onClick={() => setActive("popcorn")}
>
PopCorns
</li> */
}
