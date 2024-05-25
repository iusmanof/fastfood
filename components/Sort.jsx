import { useEffect, useState } from "react";
import "../style/Sort.scss";

function Sort({ sortingHandler }) {
  // const sortingList = ['По популярности', 'Цене (по возрастанию)', 'Цене (по убыванию)', 'А - Я', 'Я - А']

  const sortingList = [
    {
      id: 0,
      sortingName: "По популярности (по возрастанию)",
      sprtingNameStatus: "rating",
    },
    {
      id: 1,
      sortingName: "По популярности (по возрастанию)цццы",
      sprtingNameStatus: "-rating",
    },
    { id: 2, sortingName: "Цена (по возрастанию)", sprtingNameStatus: "price" },
    { id: 3, sortingName: "Цена (по убыванию)", sprtingNameStatus: "-price" },
    { id: 4, sortingName: "Название   'А - Я'", sprtingNameStatus: "title" },
    { id: 5, sortingName: "Название   'Я - А'", sprtingNameStatus: "-title" },
  ];

  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const [sortingStatus, setSortingStatus] = useState(0);

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
          {sortingList.map((name, i) => (
            <li
              key={name.id}
              className={sortingStatus === i ? "sorting-active" : ""}
              onClick={() => {
                setSortingStatus(i);
                sortingHandler(name.sprtingNameStatus)
                setIsOpenSorting(!isOpenSorting)
              }}
            >
              {name.sortingName}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Sort;
