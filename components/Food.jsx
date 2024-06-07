import qs from "qs";
import Header from "../components/Header";
import FastFoodItem from "../components/FastFoodItem";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort, { sortingList } from "../components/Sort";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

export const SearchContext = React.createContext({});

const Food = () => {
  const navigate = useNavigate();
  const categoryFilter = useSelector((state) => state.filter.category);
  const sorting = useSelector((state) => state.filter.sorting.property);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const items = useSelector((state) => state.pizza.items)
  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const [foodState, setFoodState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const getFastFood = async () => {
    const categoryParam = categoryFilter ? categoryFilter : "";
    const sortingParam = sorting ? sorting.replace("-", "") : "";
    const orderParam = sorting.includes("-") ? "desc" : "asc";
    const pageParam = currentPage;
    const perPageParam = 2;

    setIsLoading(true);
    dispatch(fetchPizzas({
      categoryParam,
      sortingParam,
      orderParam,
      pageParam,
      perPageParam
    }))
    window.scrollTo(0, 0);
    setIsLoading(false);


  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sorting,
        categoryFilter,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [sorting, currentPage, categoryFilter]);

  // Если был первый рендер то проверяем URL параметры и сохраняем в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sorting =
        sortingList.find((obj) => {
          obj.property === params.sortProperty;
        }) || "rating";
      dispatch(
        setFilters({ ...params, sorting, category: params.categoryFilter })
      );
    }
    isSearch.current = true;
  }, []);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  // Если был первый рендер то делаем fetch
  useEffect(() => {
      getFastFood();
  }, [sorting, searchValue, currentPage, categoryFilter]);

  const pizzasBLock = items
    .filter((obj) => {
      if (obj.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((i) =>
      isLoading ? (
        <FastFoodItemSkeleton key={i.id} />
      ) : (
        <FastFoodItem key={i.id} {...i} />
      )
    );

  return (
    <div>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Categories />
        <Sort />
        <FastFoodBlock>
          {pizzasBLock}
          <Outlet />
        </FastFoodBlock>
        <Pagination value={currentPage} onChangePage={onChangePage} />
      </SearchContext.Provider>
    </div>
  );
};

export default Food;
