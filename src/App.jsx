import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import NotFound from "../components/NotFound";
import User from "../components/User";
import Food from "../components/Food";
import FastFoodDetail from "../components/FastFoodDetail";
// RTK
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import Home from "../components/Home.jsx";
import MainLyout from "../layouts/MainLyout.jsx";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route element={<MainLyout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About users={users} />} />
              <Route path="about/:userId" element={<User />} />
              <Route path="food" element={<Food />} />
              <Route path="food/:foodId" element={<FastFoodDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
