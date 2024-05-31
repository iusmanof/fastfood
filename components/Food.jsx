import Header from "../components/Header";
import FastFoodItem from "../components/FastFoodItem";
import FastFoodBlock from "../components/FastFoodBlock";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentPage } from "../redux/slices/filterSlice";

export const SearchContext = React.createContext({});

const Food = () => {
  const categoryFilter = useSelector((state) => state.filter.category);
  const sorting = useSelector((state) => state.filter.sorting.property);
  const currentPage = useSelector((state) => state.filter.currentPage)
  const dispatch = useDispatch()

  const [foodState, setFoodState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  // const [page, setPage] = useState(1);

  const categoryParam = categoryFilter ? categoryFilter : "";
  const sortingParam = sorting ? sorting.replace("-", "") : "";
  const orderParam = sorting.includes("-") ? "desc" : "asc";
  const pageParam = currentPage;
  const perPageParam = 2;

  const onChangePage = (number) => {
    console.log(number)
    dispatch(setCurrentPage(number))
  }

  useEffect(() => {
    // fetch(
    //   `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
    //   // `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setFoodState(data.data));

    axios
      .get(
        `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
      )
      .then((res) => setFoodState(res.data.data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [sorting, searchValue, currentPage, categoryFilter]);

  const pizzasBLock = foodState
    .filter((obj) => {
      if (obj.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((i) =>
      isLoading ? <FastFoodItemSkeleton /> : <FastFoodItem {...i} />
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
