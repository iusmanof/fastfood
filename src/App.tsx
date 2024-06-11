import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About.jsx";
import Cart from "../components/Cart.jsx";
import NotFound from "../components/NotFound.jsx";
import User from "../components/User.jsx";
import Food from "../components/Food.jsx";
import FastFoodDetail from "../components/FastFoodDetail";
// RTK
import Home from "../components/Home.jsx";
import MainLyout from "../layouts/MainLyout.jsx";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
]; 

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
