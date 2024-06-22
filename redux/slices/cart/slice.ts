import { PayloadAction,  createSlice } from "@reduxjs/toolkit"
import { getCartFromLS } from '../../../utils/getCartFromLS' 
import { calcTotalPrice } from '../../../utils/calcTotalPrice' 
import { ICartSliceProps, ICartProps } from '../cart/types'


const cartData = getCartFromLS();
const { items, totalPrice } = cartData || { items: [], totalPrice: 0 } as { items: ICartProps[], totalPrice: number };
const initialState: ICartSliceProps = {
    totalPrice: totalPrice,
    items: items,
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<ICartProps>) => {
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
            
            state.totalPrice = calcTotalPrice(state.items)
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

