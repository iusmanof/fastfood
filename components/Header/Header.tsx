import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
import Search from "../Search/";
import styles from "./Header.module.scss";
import burger from "../../images/burger1.jpg"

function Header() {
  const { totalPrice } = useSelector(selectCart);
  const cartItemsCount = useSelector((state: {cart: { items: [] }}) =>
    state.cart.items.reduce((sum: number, o: any) => {
      return o.count + sum;
    }, 0)
  );
  const location = useLocation();

  return (
    <>
      <div>LOGO #19 10-06-2024 ts</div>
      <img src={burger} alt="burger" className={styles.logo_img} />
      {location.pathname !== "/cart" && <Search />}

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
            <Link to={`/cart`}>
              Cart(Total Price:{totalPrice} | count: {cartItemsCount} )
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
