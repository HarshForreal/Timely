import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import eventReducer from "./slice/eventSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventReducer,
  },
});
export default store;
