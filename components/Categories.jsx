// import React from "react"

import { useState } from "react";
import '../style/Categories.scss';

const Categories = () => {
  const [active, setActive] = useState('pizza')
  return (
    <>
      <div className="category">
        <ul>
          <li className={active === "pizza" ? 'active' : ''} onClick={() => setActive('pizza')}>Pizzas</li>
          <li className={active === "burger" ? 'active' : ''} onClick={() => setActive('burger')}>Burgers</li>
          <li className={active === "drink" ? 'active' : ''} onClick={() => setActive('drink')}> Drinks</li>
          <li className={active === "fry" ? 'active' : ''} onClick={() => setActive('fry')}>Frys</li>
          <li className={active === "popcorn" ? 'active' : ''} onClick={() => setActive('popcorn')}>PopCorns</li>
        </ul>
      </div>
    </>
  );
};

export default Categories;
