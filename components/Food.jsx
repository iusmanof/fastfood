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
import axios from "axios";
import { setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

export const SearchContext = React.createContext({});

const Food = () => {
  const navigate = useNavigate();
  const categoryFilter = useSelector((state) => state.filter.category);
  const sorting = useSelector((state) => state.filter.sorting.property);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const [foodState, setFoodState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const fetchFastFood = () => {
    setIsLoading(true);
    const categoryParam = categoryFilter ? categoryFilter : "";
    const sortingParam = sorting ? sorting.replace("-", "") : "";
    const orderParam = sorting.includes("-") ? "desc" : "asc";
    const pageParam = currentPage;
    const perPageParam = 2;
    axios
      .get(
        `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
      )
      .then((res) => {
        setFoodState(res.data.data);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  // 27:00
  // Если изменили параметры и был первый рендер 
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
      console.log(params);
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
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchFastFood();
    }

    isSearch.current = false;
  }, [sorting, searchValue, currentPage, categoryFilter]);

  const pizzasBLock = foodState
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
