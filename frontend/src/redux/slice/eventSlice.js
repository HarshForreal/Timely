import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch approved events from the backend
export const fetchApprovedEvents = createAsyncThunk(
  "events/fetchApprovedEvents",
  async () => {
    const response = await axios.get(
      " http://localhost:5000/api/events/approved"
    );
    console.log("Event Data Response", response);
    return response.data; // Returning the data (events) to be stored in Redux
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState: {
    approvedEvents: [], // Stores approved events
    status: "idle", // idle, loading, succeeded, failed
    error: null, // Stores any error message
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the pending state for fetching events
      .addCase(fetchApprovedEvents.pending, (state) => {
        state.status = "loading";
      })
      // Handle the successful case
      .addCase(fetchApprovedEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.approvedEvents = action.payload; // Storing events in the state
      })
      // Handle the rejected case
      .addCase(fetchApprovedEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Storing error message in case of failure
      });
  },
});

export default eventSlice.reducer;
