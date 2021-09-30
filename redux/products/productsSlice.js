import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PRODUCTS, GET_CATEGORY, GET_OTHERCATEGORY, GET_MAıNCATEGORY } from "../../graphql/queries";
import { createApolloFetch } from 'apollo-fetch';

const uri = 'http://localhost:1337/graphql' ;

const apolloFetch = createApolloFetch({uri});

export const get_category = createAsyncThunk("products/getCategory", async () => {
    const res = await apolloFetch({query:GET_CATEGORY});
    if(res.errors){
        return res.errors[0]
    }
    return res.data.categories
})

export const get_othercategory = createAsyncThunk("products/getOtherCategory", async () => {
    const res = await apolloFetch({query:GET_OTHERCATEGORY});
    if(res.errors){
        return res.errors[0]
    }
    return res.data.otherCategories
})

export const get_maincategory = createAsyncThunk("products/getMainCategory", async () => {
    const res = await apolloFetch({query:GET_MAıNCATEGORY});
    if(res.errors){
        return res.errors[0]
    }
    return res.data.mainCategories
})

export const productsSlice = createSlice({
    name:"products",
    initialState: {
        products: null,
        category: null,
        otherCategory: null,
        mainCategory: null,
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: {
        [get_category.pending]: (state,action) => {
            state.loading = true;
        },
        [get_category.fulfilled]: (state,action) => {
                state.error = null;
                state.loading = false;
                state.category = action.payload;
        },
        [get_othercategory.pending]: (state,action) => {
            state.loading = true;
        },
        [get_othercategory.fulfilled]: (state,action) => {
            state.error = null;
            state.loading = false;
            state.otherCategory = action.payload;
        },
        [get_maincategory.pending]: (state,action) => {
            state.loading = true;
        },
        [get_maincategory.fulfilled]: (state,action) => {
            state.error = null;
            state.loading = false;
            state.mainCategory = action.payload;
        },
    }
})

export default productsSlice.reducer;