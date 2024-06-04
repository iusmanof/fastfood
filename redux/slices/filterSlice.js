import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: "",
    currentPage: 1,
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
            state.sorting.name = action.payload.name
            state.sorting.property = action.payload.property
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.currentPage = Number(action.payload.currentPage),
            state.sorting.property = action.payload.sorting,
            state.category = action.payload.category
        } 
    }
})

export const { setCategory, setSorting, setCurrentPage, setFilters } = FilterSlice.actions
export default FilterSlice.reducer