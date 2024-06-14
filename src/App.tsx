import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About/About.js";
import Cart from "../components/Cart/";
import NotFound from "../components/pages/NotFound.js";
import User from "../components/User";
import Food from "../components/pages/Food.js";
import FastFoodDetail from "../components/FastFoodDetail/";
// RTK
import Home from "../components/pages/Home.js";
import MainLyout from "../layouts/MainLyout.jsx";

const users = [
  { id: "1", fullName: "Robin Wieruch" },
  { id: "2", fullName: "Sarah Finnley" },
]; 

const App: React.FC = () => {
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
