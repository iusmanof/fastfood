import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { cartProps } from "../../components/Cart/Cart"

type fetchPizzasType = Record<string, string>

export const fetchPizzas = createAsyncThunk <cartProps, Record<string, string>>(
    'pizza/fetchPizzaStatus',
    async (params: fetchPizzasType, thunkAPI) => {
        const { categoryParam,
            sortingParam,
            orderParam,
            pageParam,
            perPageParam } = params
        const { data } = await axios
            .get<cartProps[]>(
                `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
            )
            
            // if (data.data.length === 0) {
            //     return thunkAPI.rejectWithValue('Пиццы пустые')
            // }
            // return thunkAPI.fulfillWithValue(data.data)
            return data.data as cartProps;
    }
)

type Pizza = {
    id: number;
    title: string;
    price: number;
    imgLink: string;
    size: number[] | string[];
    type: string[];
    rating: number;
  }

  
interface PizzaSliceState {
    items:  Pizza[];
    status: 'loading' | 'successs' | 'error' | ''
}

const initialState: PizzaSliceState = {
    items: [],
    status: ''
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading'
            state.items = []
        }),
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'success'
            }),
            builder.addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'error'
                state.items = []
            })
    }
})

export const selectPizza = (state: RootState) => state.pizza
export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer