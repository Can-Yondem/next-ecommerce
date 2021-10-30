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
  UPDATE_ORDER,
  DELETE_ORDER,
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
    const { data } = await client.mutate({
      mutation: UPDATE_PRODUCT_QUANTITY,
      variables: { id: item.id, quantity: item.quantity, price: item.price },
      context: {
        headers: {
          Authorization: `Bearer ${item.token}`,
        },
      },
    });
    return data.updateBagg.bagg;
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

export const update_order = createAsyncThunk(
  "bag/updateOrder",
  async ({ id, status, token }) => {
    const { data } = await client.mutate({
      mutation: UPDATE_ORDER,
      variables: { id, status },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.updateOrder.order;
  }
);

export const delete_order = createAsyncThunk(
  "bag/deleteOrder",
  async ({ id, token }) => {
    const { data } = await client.mutate({
      mutation: DELETE_ORDER,
      variables: { id },
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    return data.deleteOrder.order.id;
  }
);

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    userBag: [],
    orders: [],
    orderDetail: [],
    loading: false,
  },
  reducers: {
    deleteItem: (state, action) => {
      let newBag = state.userBag.filter((item) => item.id !== action.payload);
      state.userBag = newBag;
    },
    findOrderDetail: (state, action) => {
      let filterOrder = state.orders.filter(
        (order) => order.id === action.payload
      );
      state.orderDetail = filterOrder;
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
    [update_quantity.fulfilled]: (state, action) => {
      let productIndex = state.userBag.findIndex(
        (item) => item.id === action.payload.id
      );
      state.userBag[productIndex].price = action.payload.price;
      state.userBag[productIndex].quantity = action.payload.quantity;
    },
    [update_order.fulfilled]: (state, action) => {
      let orderIndex = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      state.orders[orderIndex].status = action.payload.orderIndex;
      state.orders[orderIndex].createdAt = action.payload.createdAt;
      state.orders[orderIndex].updatedAt = action.payload.updatedAt;
    },
    [delete_order.fulfilled]: (state, action) => {
      let newOrders = state.orders.filter(
        (item) => item.id !== action.payload
      );
      state.orders = newOrders;
      console.log(state.orders)
      console.log(newOrders)
    },
  },
});

export default bagSlice.reducer;
export const { deleteItem, findOrderDetail } = bagSlice.actions;
