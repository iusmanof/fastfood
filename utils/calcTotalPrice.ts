import { ICartProps } from "../redux/slices/cart/types";

export const calcTotalPrice = (items: ICartProps[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
