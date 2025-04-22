import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApprovedEvents } from "../redux/slice/eventSlice"; // Action to fetch approved events

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { approvedEvents, status, error } = useSelector(
    (state) => state.events
  ); // Access events from Redux state
  console.log("Approved Event from frontend", approvedEvents);
  // Fetch approved events on component mount
  useEffect(() => {
    dispatch(fetchApprovedEvents());
  }, [dispatch]);

  // Handle different states
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <h1 className="text-3xl font-semibold text-purple-500">
          Approved Events
        </h1>

        <div className="mt-6">
          {approvedEvents.length === 0 ? (
            <p>No approved events found.</p>
          ) : (
            approvedEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <h3 className="text-xl font-semibold text-purple-600">
                  {event.title}
                </h3>
                <p className="text-gray-700">{event.description}</p>
                <p className="text-gray-500 text-sm">
                  Date: {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
