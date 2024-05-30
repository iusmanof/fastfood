import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: "",
    sorting: {
        name: "По популярности (по возрастанию)",
        property:  "rating"
    }
}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSorting: (state, action) => {
            console.log(action.payload)
            state.sorting.name = action.payload.name
            state.sorting.property = action.payload.property
        }
    }
})

export const { setCategory, setSorting } = FilterSlice.actions
export default FilterSlice.reducer