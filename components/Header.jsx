import styles from "../style/Header.module.scss";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

function Header() {
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const count = useSelector((state) => state.cart.items.length)

  return (
    <>
      <div>LOGO</div>
      <Search />

      <div>
        <ul className={styles.headerlinks}>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/food`}>Food</Link>
          </li>
          <li>
            <Link to={`/cart`}>Cart(Total Price:{totalPrice} | count: {count} )</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
