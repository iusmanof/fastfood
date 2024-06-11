import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FastFoodItemSkeleton from "./FastFoodItemSkeleton";
import axios from "axios";

function FastFoodDetail() {
  const { foodId } = useParams();
  const [foodState, setFoodState] = useState<{imgLink: string, title: string, price: number} | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchPizzaDeatail() {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/fast-food/${foodId}`
        );
        setFoodState(data);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 500);
      } catch (error) {
        alert(error);
        navigate('/food')
      }
    }

    fetchPizzaDeatail();
  }, []);

  if (!foodState){
   return "Загрузка ..."
  }

  const item = (
    <div className="food-block">
      <img src={foodState.imgLink} alt="imgLink" />
      <p>{foodState.title}</p>
      <p>Price: {foodState.price}</p>

      <Link to="/food">Back to Food</Link>
    </div>
  );
  return item;
  // return isLoading ? <FastFoodItemSkeleton /> : item;
}

export default FastFoodDetail;
