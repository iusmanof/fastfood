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
import { selectFilter, selectFilterProperty, setCurrentPage, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzaSlice";

const Food = () => {
  const navigate = useNavigate();
  const { category, currentPage, searchValue } = useSelector(selectFilter);
  const sorting = useSelector(selectFilterProperty);
  const { items, status } = useSelector(selectPizza)

  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const getFastFood = async () => {
    const categoryParam = category ? category : "";
    const sortingParam = sorting ? sorting.replace("-", "") : "";
    const orderParam = sorting.includes("-") ? "desc" : "asc";
    const pageParam = currentPage;
    const perPageParam = 6  ;

    dispatch(fetchPizzas({
      categoryParam,
      sortingParam,
      orderParam,
      pageParam,
      perPageParam
    }))
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sorting,
        category,
        currentPage,
      });
      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [sorting, currentPage, category]);

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
  }, [sorting, searchValue, currentPage, category]);

  const pizzasBLock = items
    .filter((obj) => {
      if (obj.title.toLocaleLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((i) =>
      status === 'loading' ? (
        <FastFoodItemSkeleton key={i.id} />
      ) : (
        <FastFoodItem key={i.id} {...i} />
      )
    );

  const error = (<div>Error</div>)

  return (
    <div>
      <Header />
      <Categories />
      <Sort />
      <FastFoodBlock>
        {status === 'error' ? error : pizzasBLock}
        <Outlet />
      </FastFoodBlock>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Food;
