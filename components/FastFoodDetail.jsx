import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FastFoodItemSkeleton from "../components/FastFoodItemSkeleton";

function FastFoodDetail() {
  const { foodId } = useParams();
  const [foodState, setFoodState] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/fast-food/${foodId}`)
      .then((response) => response.json())
      .then((data) => setFoodState(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const item = (
    <div className="food-block">
      <img src={foodState.imgLink} alt="imgLink" />
      <p>{foodState.title}</p>
      <p>Price: {foodState.price}</p>

      <Link to="/food">Back to Food</Link>
    </div>
  );

  return isLoading ? <FastFoodItemSkeleton /> : item;
}

export default FastFoodDetail;
