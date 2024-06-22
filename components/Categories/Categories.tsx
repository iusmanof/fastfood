import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/filterSlice";
import "./Categories.scss";
// import { useWhyDidYouUpdate } from 'ahooks';

type categoriesFastFoodType = {
  id: number;
  categoryName: string;
  categoryNameStatus: string;
};

interface CategoryItemProps {
  categoryName: string;
  categoryNameStatus: string;
  categoryCurrentStatus: string;
  setActive: (categoryNameStatus: string) => void;
}

const categoriesFastFood: categoriesFastFoodType[] = [
  { id: 0, categoryName: "Все", categoryNameStatus: "" },
  { id: 1, categoryName: "Пицццы", categoryNameStatus: "pizza" },
  { id: 2, categoryName: "Бургеры", categoryNameStatus: "burger" },
  { id: 3, categoryName: "Напитки", categoryNameStatus: "drinks" },
  { id: 4, categoryName: "Картошка фри", categoryNameStatus: "fry" },
  { id: 5, categoryName: "Поп-корн", categoryNameStatus: "popcorn" },
];

const CategoryItem: React.FC<CategoryItemProps> = React.memo(({
  categoryName,
  categoryNameStatus,
  categoryCurrentStatus,
  setActive,
}) => {
  const dispatch = useDispatch();
  // useWhyDidYouUpdate('CategoryItem', {
  //   categoryName,
  //   categoryNameStatus,
  //   categoryCurrentStatus,
  //   setActive,
  // })

  const onChangeCategory = React.useCallback(() => {
    setActive(categoryNameStatus);
    dispatch(setCategory(categoryNameStatus));
  }, [])

  return (
    <li
      className={categoryCurrentStatus === categoryNameStatus ? "active" : ""}
      onClick={() => {
        // setActive(categoryNameStatus);
        // dispatch(setCategory(categoryNameStatus));
        onChangeCategory()
      }}
    >
      {categoryName}
    </li>
  );
});

const Categories: React.FC = () => {
  const [active, setActive] = useState("");

  return (
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
