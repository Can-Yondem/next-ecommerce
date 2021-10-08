import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apollo-client";
import {
  POST_BAG,
  GET_BAG,
  DELETE_BAG_PRODUCT,
  UPDATE_PRODUCT_QUANTITY,
  CREATE_ORDER,
  UPDATE_BAG_ISORDERED,
  GET_ORDER,
} from "../../graphql/queries";
import { toast } from "react-toastify";

export const post_bag = createAsyncThunk("bag/postBag", async (bagItem) => {
  const { data } = await client.mutate({
    mutation: POST_BAG,
    variables: {
      quantity: bagItem.quantity,
      product_id: bagItem.id,
      price: bagItem.price,
      user: bagItem.userID,
    },
    context: {
      headers: {
        Authorization: `Bearer ${bagItem.token}`,
      },
    },
  });
  return data.createBagg.bagg;
});

export const get_bag = createAsyncThunk("bag/getBag", async (token) => {
  const { data } = await client.query({
    query: GET_BAG,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  return data.baggs;
});

export const update_bag = createAsyncThunk("bag/updateBag", async (item) => {
  await client.mutate({
    mutation: DELETE_BAG_PRODUCT,
    variables: { id: item.id },
    context: {
      headers: {
        Authorization: `Bearer ${item.token}`,
      },
    },
  });
});

export const update_quantity = createAsyncThunk(
  "bag/updateQuantity",
  async (item) => {
    await client.mutate({
      mutation: UPDATE_PRODUCT_QUANTITY,
      variables: { id: item.id, quantity: item.quantity, price: item.price },
      context: {
        headers: {
          Authorization: `Bearer ${item.token}`,
        },
      },
    });
  }
);

export const create_order = createAsyncThunk(
  "bag/createOrder",
  async (item) => {
    await client.mutate({
      mutation: CREATE_ORDER,
      variables: {
        user_id: item.user_id,
        baggs: item.baggs,
        total_price: item.total_price,
      },
      context: {
        headers: {
          Authorization: `Bearer ${item.token}`,
        },
      },
    });
  }
);

export const update_isordered = createAsyncThunk(
  "bag/updateIsordered",
  async (item) => {
    await client.mutate({
      mutation: UPDATE_BAG_ISORDERED,
      variables: { id: item.id, isOrdered: item.isOrdered },
      context: {
        headers: {
          Authorization: `Bearer ${item.token}`,
        },
      },
    });
  }
);

export const get_order = createAsyncThunk("bag/getOrder", async (token) => {
  const { data } = await client.query({
    query: GET_ORDER,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  return data.orders;
});

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    userBag: [],
    orders: [],
    loading: false,
  },
  reducers: {
    deleteItem: (state, action) => {
      let newBag = state.userBag.filter((item) => item.id !== action.payload);
      state.userBag = newBag;
    },
    updateQuantity: (state, action) => {
      let productIndex = state.userBag.findIndex((item) => item.id === item.id);
      state.userBag[productIndex].price = action.payload.price;
      state.userBag[productIndex].quantity = action.payload.quantity;
      console.log(action.payload.quantity)
    },
  },
  extraReducers: {
    [post_bag.pending]: (state, action) => {
      state.loading = true;
    },
    [post_bag.fulfilled]: (state, action) => {
      toast.success("Ürün sepete eklendi.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      state.loading = false;
      state.userBag.push(action.payload);
    },
    [get_bag.fulfilled]: (state, action) => {
      state.userBag = action.payload;
    },
    [get_order.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export default bagSlice.reducer;
export const { deleteItem, updateQuantity } = bagSlice.actions;
