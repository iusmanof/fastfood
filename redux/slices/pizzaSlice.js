import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async ( params ) => {
        const { categoryParam,
            sortingParam,
            orderParam,
            pageParam,
            perPageParam } = params
        const { data } = await axios
            .get(
                `http://localhost:3000/fast-food?category=${categoryParam}&_sort=${sortingParam}&_order=${orderParam}&_page=${pageParam}&_per_page=${perPageParam}`
            )
        return data.data
    }
)

const initialState = {
    items: [],
    status: 'loading'
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
        builder.addCase(fetchPizzas.pending, (state, action)  => {
            state.status = 'loading'
            state.items = []
        }),
        builder.addCase(fetchPizzas.fulfilled, (state, action)  => {
            state.items = action.payload
            state.status = 'success'
        }),
        builder.addCase(fetchPizzas.rejected, (state, action)  => {
            state.status = 'error'
            state.items = []
        })
    }
})


export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer