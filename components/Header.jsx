import styles from "../style/Header.module.scss";
import { Link } from "react-router-dom";

function Header() {

  return (
    <>
      <div>LOGO</div>
      <div>
        <ul className={styles.headerlinks}>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/about`}>About</Link></li>
          <li><Link to={`/food`}>Food</Link></li>
          <li><Link to={`/cart`}>Cart</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
