import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_SUBCATEGORY_AND_PRODUCTS, GET_OTHERCATEGORY_AND_PRODUCTS, GET_MAıNCATEGORY } from "../../graphql/queries";
import client from "../../apollo-client";


export const get_subcategory = createAsyncThunk("products/getSubCategory", async () => {
    const { data } = await client.query({query:GET_SUBCATEGORY_AND_PRODUCTS});
    return data.subCategories
})

export const get_othercategory = createAsyncThunk("products/getOtherCategory", async () => {
    const { data } = await client.query({query:GET_OTHERCATEGORY_AND_PRODUCTS});
    return data.otherCategories
})

export const get_maincategory = createAsyncThunk("products/getMainCategory", async () => {
    const { data } = await client.query({query:GET_MAıNCATEGORY});
    return data.mainCategories
 
})

export const productsSlice = createSlice({
    name:"products",
    initialState: {
        products: null,
        subcategory: null,
        otherCategory: null,
        mainCategory: null,
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: {
        [get_subcategory.pending]: (state,action) => {
            state.loading = true;
        },
        [get_subcategory.fulfilled]: (state,action) => {
                state.error = null;
                state.loading = false;
                state.subcategory = action.payload;
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