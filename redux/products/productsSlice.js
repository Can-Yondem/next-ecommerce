import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_SUBCATEGORY_AND_PRODUCTS,
  GET_OTHERCATEGORY_AND_PRODUCTS,
  GET_MAıNCATEGORY,
  GET_PRODUCTS,
  ADD_MAINCATEGORY,
  DELETE_MAINCATEGORY,
  GET_CATEGORY,
  GET_SUBCATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_SUBCATEGORY,
  DELETE_SUBCATEGORY,
  GET_PRODUCTS_LIMIT,
  PRODUCTS_COUNT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_MAINCATEGORY,
  UPDATE_CATEGORY,
  UPDATE_SUBCATEGORY,
  IMAGE_UPLOAD,
  ADD_COMMENT,
  GET_COMMENT,
} from "../../graphql/queries";
import client from "../../apollo-client";

export const get_subcategory_and_products = createAsyncThunk(
  "products/getSubCategoryAndProducts",
  async () => {
    const { data } = await client.query({
      query: GET_SUBCATEGORY_AND_PRODUCTS,
    });
    return data.subCategories;
  }
);

export const get_othercategory = createAsyncThunk(
  "products/getOtherCategory",
  async () => {
    const { data } = await client.query({
      query: GET_OTHERCATEGORY_AND_PRODUCTS,
    });
    return data.otherCategories;
  }
);

export const get_maincategory = createAsyncThunk(
  "products/getMainCategory",
  async () => {
    const { data } = await client.query({ query: GET_MAıNCATEGORY });
    return data.mainCategories;
  }
);

export const get_products = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await client.query({ query: GET_PRODUCTS });
    return data.products;
  }
);

export const add_maincategory = createAsyncThunk(
  "products/addMainCategory",
  async (category_name) => {
    const { data } = await client.mutate({
      mutation: ADD_MAINCATEGORY,
      variables: { category_name: category_name.mainCategoryName },
      context: {
        headers: {
          Authorization: `Bearer ${category_name.token}`,
        },
      },
    });
    return data.createMainCategory.mainCategory;
  }
);

export const delete_maincategory = createAsyncThunk(
  "products/deleteMainCategory",
  async (category_id) => {
    const { data } = await client.mutate({
      mutation: DELETE_MAINCATEGORY,
      variables: { category_id: category_id.id },
      context: {
        headers: {
          Authorization: `Bearer ${category_id.token}`,
        },
      },
    });
    return data.deleteMainCategory.mainCategory._id;
  }
);

export const get_category = createAsyncThunk(
  "products/getCategory",
  async () => {
    const { data } = await client.query({ query: GET_CATEGORY });
    return data.categories;
  }
);

export const get_subcategory = createAsyncThunk(
  "products/getSubCategory",
  async () => {
    const { data } = await client.query({ query: GET_SUBCATEGORY });
    return data.subCategories;
  }
);

export const add_category = createAsyncThunk(
  "products/addCategory",
  async (category_name) => {
    const { data } = await client.mutate({
      mutation: ADD_CATEGORY,
      variables: {
        category_name: category_name.name,
        main_category_id: category_name.id,
      },
      context: {
        headers: {
          Authorization: `Bearer ${category_name.token}`,
        },
      },
    });
    return data.createCategory.category;
  }
);

export const delete_category = createAsyncThunk(
  "products/deleteCategory",
  async (category_id) => {
    const { data } = await client.mutate({
      mutation: DELETE_CATEGORY,
      variables: { category_id: category_id.id },
      context: {
        headers: {
          Authorization: `Bearer ${category_id.token}`,
        },
      },
    });
    return data.deleteCategory.category.id;
  }
);

export const add_subcategory = createAsyncThunk(
  "products/addSubCategory",
  async (category_name) => {
    const { data } = await client.mutate({
      mutation: ADD_SUBCATEGORY,
      variables: {
        category_name: category_name.name,
        category_id: category_name.id,
      },
      context: {
        headers: {
          Authorization: `Bearer ${category_name.token}`,
        },
      },
    });
    return data.createSubCategory.subCategory;
  }
);

export const delete_subcategory = createAsyncThunk(
  "products/deleteSubCategory",
  async (category_id) => {
    const { data } = await client.mutate({
      mutation: DELETE_SUBCATEGORY,
      variables: { category_id: category_id.id },
      context: {
        headers: {
          Authorization: `Bearer ${category_id.token}`,
        },
      },
    });
    return data.deleteSubCategory.subCategory.id;
  }
);

export const get_products_limit = createAsyncThunk(
  "products/getProductsLimit",
  async ({ limit, start }) => {
    const { data } = await client.query({
      query: GET_PRODUCTS_LIMIT,
      variables: { limit, start },
    });
    return data.products;
  }
);

export const product_count = createAsyncThunk(
  "products/productCount",
  async () => {
    const { data } = await client.query({
      query: PRODUCTS_COUNT,
    });
    return data.productsConnection.aggregate.count;
  }
);

export const add_product = createAsyncThunk(
  "products/addProduct",
  async ({ name, desc, tradeMark, price, stock, subCategory, token }) => {
    const { data } = await client.mutate({
      mutation: ADD_PRODUCT,
      variables: {
        name,
        desc,
        price: Number(price),
        stock: Number(stock),
        tradeMark,
        subCategory,
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.createProduct.product;
  }
);

export const delete_product = createAsyncThunk(
  "products/deleteProduct",
  async ({ id, token }) => {
    const { data } = await client.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.deleteProduct.product.id;
  }
);

export const update_maincategory = createAsyncThunk(
  "products/updateMainCategory",
  async ({ category, id, token }) => {
    const { data } = await client.mutate({
      mutation: UPDATE_MAINCATEGORY,
      variables: { category, id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.updateMainCategory.mainCategory;
  }
);

export const update_category = createAsyncThunk(
  "products/updateCategory",
  async ({ category, id, main_category, token }) => {
    const { data } = await client.mutate({
      mutation: UPDATE_CATEGORY,
      variables: { category, id, main_category },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.updateCategory.category;
  }
);

export const update_subcategory = createAsyncThunk(
  "products/updateSubCategory",
  async ({ id, sub_category, category, token }) => {
    const { data } = await client.mutate({
      mutation: UPDATE_SUBCATEGORY,
      variables: { id, sub_category, category },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.updateSubCategory.subCategory;
  }
);

export const upload_image = createAsyncThunk(
  "produtcs/imageUpload",
  async ({ files, token }) => {
    const { data } = await client.mutate({
      mutation: IMAGE_UPLOAD,
      variables: { file: files },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    console.log(data, "data");
  }
);

export const add_comment = createAsyncThunk(
  "products/addComment",
  async ({ comment, rating, token, user, product }) => {
    const { data } = await client.mutate({
      mutation: ADD_COMMENT,
      variables: { comment, rating, user, product },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    console.log(data)
    return data.createComment.comment;
  }
);

export const get_comment = createAsyncThunk(
  "products/getComment",
  async (id) => {
    const { data } = await client.query({
      query: GET_COMMENT,
      variables: { id },
    });
    return data.products[0];
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    productsNumber: null,
    subcategory: null,
    subcategoryAndProducts: null,
    category: null,
    otherCategory: null,
    mainCategory: null,
    comments: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [get_subcategory_and_products.pending]: (state, action) => {
      state.loading = true;
    },
    [get_subcategory_and_products.fulfilled]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.subcategory = action.payload;
    },
    [get_othercategory.pending]: (state, action) => {
      state.loading = true;
    },
    [get_othercategory.fulfilled]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.otherCategory = action.payload;
    },
    [get_maincategory.pending]: (state, action) => {
      state.loading = true;
    },
    [get_maincategory.fulfilled]: (state, action) => {
      state.error = null;
      state.loading = false;
      state.mainCategory = action.payload;
    },
    [get_products.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [add_maincategory.fulfilled]: (state, action) => {
      state.mainCategory.push(action.payload);
    },
    [delete_maincategory.fulfilled]: (state, action) => {
      let newMainCategory = state.mainCategory.filter(
        (item) => item.id !== action.payload
      );
      state.mainCategory = newMainCategory;
    },
    [get_category.fulfilled]: (state, action) => {
      state.category = action.payload;
    },
    [get_subcategory.fulfilled]: (state, action) => {
      state.subcategory = action.payload;
    },
    [add_category.fulfilled]: (state, action) => {
      state.category.push(action.payload);
    },
    [delete_category.fulfilled]: (state, action) => {
      let newCategory = state.category.filter(
        (item) => item.id !== action.payload
      );
      state.category = newCategory;
    },
    [add_subcategory.fulfilled]: (state, action) => {
      state.subcategory.push(action.payload);
    },
    [delete_subcategory.fulfilled]: (state, action) => {
      let newSubCategory = state.subcategory.filter(
        (item) => item.id !== action.payload
      );
      state.subcategory = newSubCategory;
    },
    [get_products_limit.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [product_count.fulfilled]: (state, action) => {
      state.productsNumber = action.payload;
    },
    [add_product.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [delete_product.fulfilled]: (state, action) => {
      let newProducts = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.products = newProducts;
    },
    [update_maincategory.fulfilled]: (state, action) => {
      let foundIndex = state.mainCategory.findIndex(
        (index) => index.id == action.payload.id
      );
      state.mainCategory[foundIndex] = action.payload;
    },
    [update_category.fulfilled]: (state, action) => {
      let foundIndex = state.category.findIndex(
        (index) => index.id == action.payload.id
      );
      state.category[foundIndex] = action.payload;
    },
    [update_subcategory.fulfilled]: (state, action) => {
      let foundIndex = state.subcategory.findIndex(
        (index) => index.id == action.payload.id
      );
      state.subcategory[foundIndex] = action.payload;
    },
    [add_comment.fulfilled]: (state, action) => {
      state.comments.push(action.payload);
    },
    [get_comment.fulfilled]: (state, action) => {
      state.comments = action.payload.comments;
    },
  },
});

export default productsSlice.reducer;
