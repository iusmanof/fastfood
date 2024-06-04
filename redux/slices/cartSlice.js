import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFood: (state, action) => {
            state.items.push(action.payload)
        },
        removeFood: (state, action) => {
            state.items.filter(obj => obj.id === action.payload)
        },
        clearCart: (state ) => {
            state.items = []
        }
    }

}) 

export const  {addFood, removeFood, clearCart } = CartSlice.actions
export default CartSlice.reducer
