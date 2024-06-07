import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "../components/About";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import User from "../components/User";
import Food from "../components/Food";
import FastFoodDetail from "../components/FastFoodDetail";

// RTK
import { Provider } from "react-redux";
import { store } from "../redux/store.js";

const food = [
  { id: "1", title: "food1" },
  { id: "2", title: "food2" },
];

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes element={<Layout />}>
        <Route index element={<App />} />

        <Route path="about" element={<About users={users} />} />
        <Route path="about/:userId" element={<User />} />

        <Route path="food" element={<Food />} />
        {/* <Route path=":foodId" element={<FastFoodDetail />} />
          </Route> */}

        <Route path="food/:foodId" element={<FastFoodDetail />} />

        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
