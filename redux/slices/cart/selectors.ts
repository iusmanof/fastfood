import { RootState } from '../../store/store'
import {CartSlice} from './slice'
import { ICartProps } from '../cart/types'

// export const selectCart = (state: RootState) => state.cart;
// export const selectCartItemById = (id: number) => (state: RootState) => state.cart.items.find(o => o.id === id)
export const selectCart = (state: RootState) => state.cart as { items: ICartProps[], totalPrice: number };
export const selectCartItemById = (id: number) => (state: RootState) => (state.cart as { items: ICartProps[] }).items.find(o => o.id === id);

export const { addFood, removeFood, clearCart, incrementFood, decrementFood } = CartSlice.actions
export default CartSlice.reducer



