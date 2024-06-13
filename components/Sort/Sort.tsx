import { useEffect, useState, useRef } from "react";
import "./Sort.scss";
import { useDispatch } from "react-redux";
import { setSorting } from "../../redux/slices/filterSlice";

type sortingListType = {
  id: number;
  name: string;
  property: string;
};
export const sortingList: sortingListType[] = [
  {
    id: 0,
    name: "По популярности (по возрастанию)",
    property: "rating",
  },
  {
    id: 1,
    name: "По популярности (по убыванию)",
    property: "-rating",
  },
  { id: 2, name: "Цена (по возрастанию)", property: "price" },
  { id: 3, name: "Цена (по убыванию)", property: "-price" },
  { id: 4, name: "Название   'А - Я'", property: "title" },
  { id: 5, name: "Название   'Я - А'", property: "-title" },
];

function Sort() {
  const [sortOpen, setSortOpen] = useState(false);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent): void => {
      event.preventDefault();
      const element = event.target as HTMLElement;
      const divElement = element.parentElement as HTMLDivElement;
      if (sortRef.current) {
        if (divElement.className.includes(sortRef.current.className)) {
          setSortOpen(false);
        }
      }
    };

    document.body.addEventListener("click", (e) => handleClickOutSide(e));

    return () => {
      document.body.removeEventListener("click", (e) => handleClickOutSide(e));
    };
  }, []);

  return (
    <>
      <div className="sorting-label" onClick={() => setSortOpen(true)}>
        Сортировка по:
      </div>
      <ul className="sorting-list" ref={sortRef}>
        {sortOpen && (
          <>
            {sortingList.map((item, i) => (
              <li
                key={item.id}
                onClick={() => {
                  dispatch(setSorting(item));
                }}
              >
                {item.name}
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
}

export default Sort;
