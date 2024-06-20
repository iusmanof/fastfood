import { PayloadAction,  createSlice } from "@reduxjs/toolkit"
import { RootState } from '../store/store'

export interface cartProps {
    id: number,
    title: string,
    type: string[],
    size: number[] | string[],
    count: number,
    price: number,
    totalItemPrice: number
}

interface cartSliceProps {
    totalPrice: number,
    items: cartProps[]
}

const initialState: cartSliceProps = {
    totalPrice: 0,
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<cartProps>) => {
            console.log(action)
            const re = state.items.find((o) => o.id === action.payload.id);
            if (!re) {
                state.items.push({ ...action.payload, count: 1, totalItemPrice: action.payload.price })
            } else {
                state.items.map((el, i) => {
                    if (el.id === action.payload.id) {
                        el.count += 1;
                        el.totalItemPrice += el.price
                    }
                    return el
                })
            }

            state.totalPrice = state.items.reduce((sum, o) => {
                return o.price * o.count + sum
            }, 0)
        },
        incrementFood: (state, action) => {
            state.items.map(el => {
                if (el.id === action.payload) {
                    el.count += 1
                    el.totalItemPrice += el.price
                    state.totalPrice += el.price
                }
            })

        },
        decrementFood: (state, action) => {
            state.items.map(el => {
                if (el.count <= 1) {
                    state.items = state.items.filter(obj => obj.id !== action.payload)
                }

                if (el.id === action.payload) {
                    el.count -= 1
                    el.totalItemPrice -= el.price
                    state.totalPrice -= el.price
                }
                return el;
            })
        },
        removeFood: (state, action) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }

})

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: number) => (state: RootState) => state.cart.items.find(o => o.id === id)
export const { addFood, removeFood, clearCart, incrementFood, decrementFood } = CartSlice.actions
export default CartSlice.reducer
