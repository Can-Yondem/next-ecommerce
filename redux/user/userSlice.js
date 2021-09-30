import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signin = createAsyncThunk("user/signin", async ({ email: identifier, password }, { rejectWithValue }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier,
            password
        })
    });
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        return rejectWithValue(data.message);
    }
});

export const signup = createAsyncThunk("user/signup", async (user, { rejectWithValue }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        return rejectWithValue(data.message);
    }
});

export const signout = createAsyncThunk("user/signout", async () => {
    await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signout`, {
        method: "POST",
    });
})

export const checkUserLoggedIn = createAsyncThunk("user/checkUser", async (_,{ rejectWithValue }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/user`);
    const data = await res.json();
    if(res.ok){
        return data;
    }
    else{
        return rejectWithValue();
    }

}
)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [signin.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [signin.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [signup.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [signup.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [signout.fulfilled]: (state, action) => {
            state.user = null;
        },
        [checkUserLoggedIn.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [checkUserLoggedIn.rejected]: (state, action) => {
            state.user = null;
        },

    }
});

export default userSlice.reducer;