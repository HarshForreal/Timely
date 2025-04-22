import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../redux/slice/eventSlice"; // Create event action

const AddEvent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, description, date };
    dispatch(createEvent(newEvent)); // Dispatch create event action
  };

  return (
    <div className="bg-purple-50 min-h-screen flex justify-center items-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-500">
          Add Event
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Event Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Event Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-3 mt-2 mb-4 border border-gray-300 rounded-md"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
