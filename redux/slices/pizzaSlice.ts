import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";
import { cartProps } from "../../components/Cart/Cart"

type fetchPizzasType = Record<string, string>

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

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
    status: 'loading' | 'success' | 'error' | ''
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}

export type SearchPizzaParams = {
    sortProperty: string, order: string, categoryFilter: string, search: string, currentPage: string
}

export const fetchPizzas = createAsyncThunk <Pizza[], Record<string, string>>(
    'pizza/fetchPizzaStatus',
    async (params: fetchPizzasType) => {
        const { categoryParam,
            sortingParam,
            orderParam,
            pageParam,
            perPageParam } = params

        const data = await axios
            .get<Pizza[]>(
                `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
            ).then((res) => res.data);
            
            // if (data.data.length === 0) {
            //     return thunkAPI.rejectWithValue('Пиццы пустые')
            // }
            // return thunkAPI.fulfillWithValue(data.data)
            const pizzas: Pizza[] = data.data;
            return pizzas;
    }
)


export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        }),
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = Status.SUCCESS
            }),
            builder.addCase(fetchPizzas.rejected, (state, action) => {
                state.status = Status.ERROR
                state.items = []
            })
    }
})

export const selectPizza = (state: RootState) => state.pizza
export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer