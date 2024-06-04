import { useEffect, useState } from "react";
import "../style/Sort.scss";
import { useDispatch } from "react-redux";
import { setSorting } from "../redux/slices/filterSlice";
export const sortingList = [
  {
    id: 0,
    name: "",
    property: "rating",
  },
  {
    id: 1,
    name: "По популярности (по возрастанию)",
    property: "-rating",
  },
  { id: 2, name: "Цена (по возрастанию)", property: "price" },
  { id: 3, name: "Цена (по убыванию)", property: "-price" },
  { id: 4, name: "Название   'А - Я'", property: "title" },
  { id: 5, name: "Название   'Я - А'", property: "-title" },
];

function Sort() {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [sortingStatus, setSortingStatus] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => setIsOpenSorting(!isOpenSorting)}
        className="sorting-label"
      >
        Сортировка по:
      </div>
      {isOpenSorting && (
        <ul className="sorting-list">
          {sortingList.map((item, i) => (
            <li
              key={item.id}
              className={sortingStatus === i ? "sorting-active" : ""}
              onClick={() => {
                setIsOpenSorting(!isOpenSorting);
               
                dispatch(setSorting(item));
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Sort;
