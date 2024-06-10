import styles from "../style/Header.module.scss";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

function Header() {
  const { totalPrice }= useSelector(selectCart)
  const cartItemsCount = useSelector(state => state.cart.items.reduce((sum, o) => { return o.count + sum }, 0))


  return (
    <>
      <div>LOGO #19 09062024</div> 
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
            <Link to={`/cart`}>Cart(Total Price:{totalPrice} | count: {cartItemsCount} )</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
