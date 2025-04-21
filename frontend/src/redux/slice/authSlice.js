// src/redux/slice/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
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
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

// Thunk for login
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    const { token, role, name } = response.data;
    console.log("Data reached in Login function, logged in!!");
    // Dispatch the login action with user data and token
    dispatch(setUser({ user: { name, email, role }, token }));
  } catch (error) {
    console.error("Login failed", error.response.data.error);
  }
};

// Thunk for signup (optional)
export const signupUser = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password,
    });
    console.log("Singup User: ", response);
    dispatch(loginUser(email, password));
  } catch (error) {
    console.error("Signup failed", error.response.data.error);
  }
};
