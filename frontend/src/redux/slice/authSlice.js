import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    console.log("Logged in user", response);
    return response.data; // Return the user data and token
  }
);

// Thunk for signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, password }, { dispatch }) => {
    const response = await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password,
    });
    dispatch(loginUser({ email, password }));
    return response.data;
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle the loginUser async thunk
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"; // Set status to loading when the login starts
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to succeeded after successful login
        const { token, role, name } = action.payload;
        state.user = { name, role };
        state.token = token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed when the login fails
        state.error = action.error.message;
      })

      // Handle the signupUser async thunk
      .addCase(signupUser.pending, (state) => {
        state.status = "loading"; // Set status to loading when the signup starts
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.status = "succeeded"; // Set status to succeeded after successful signup
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed"; // Set status to failed when the signup fails
        state.error = action.error.message;
      });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
