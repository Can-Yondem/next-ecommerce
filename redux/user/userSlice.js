import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apollo-client";
import { toast } from "react-toastify";
import { FIND_USERNAME } from "../../graphql/queries";

export const signin = createAsyncThunk(
  "user/signin",
  async ({ email: identifier, password }, { rejectWithValue }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier,
          password,
        }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return rejectWithValue(data.message);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (user, { rejectWithValue }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return rejectWithValue(data.message);
    }
  }
);

export const signout = createAsyncThunk("user/signout", async () => {
  await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signout`, {
    method: "POST",
  });
});

export const checkUserLoggedIn = createAsyncThunk(
  "user/checkUser",
  async (_, { rejectWithValue }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/user`);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return rejectWithValue();
    }
  }
);

export const findUsername = createAsyncThunk(
  "user/findUsername", async (username) => {
    const { data } = await client.query({
      query: FIND_USERNAME,
      variables: {username}
    });
    console.log(data,username);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    [signin.rejected]: (state, action) => {
      state.error = action.payload;
      toast.warn(action.payload, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [signup.rejected]: (state, action) => {
      state.error = action.payload;
      toast.warn(action.payload, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [signout.fulfilled]: (state, action) => {
      state.user = null;
      state.token = null;
    },
    [checkUserLoggedIn.pending]: (state, action) => {
      state.loading = true;
    },
    [checkUserLoggedIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    },
    [checkUserLoggedIn.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
