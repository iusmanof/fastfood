import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

type SortingType = {
    name: string,
    property: 'rating' | '-rating' | 'title' | '-title' | 'price' | '-price'
}

interface FilterState {
    searchValue: string,
    category: string,
    currentPage: number,
    sorting: SortingType
}

const initialState: FilterState = {
    searchValue: '',
    category: "",
    currentPage: 1,
    sorting: {
        name: "По популярности (по возрастанию)",
        property: "rating"
    }
} 

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setSorting: (state, action: PayloadAction<SortingType>) => {
            state.sorting.name = action.payload.name
            state.sorting.property = action.payload.property
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.currentPage = Number(action.payload.currentPage),
            state.sorting.property = action.payload.sorting,
            state.category = action.payload.category
        }
    }
})

export const selectFilter = (state: RootState) => state.filter
export const selectFilterProperty = (state: RootState) => state.filter.sorting.property
export const { setSearchValue, setCategory, setSorting, setCurrentPage, setFilters } = FilterSlice.actions
export default FilterSlice.reducer