import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    // Ensure the user is authenticated
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user.id; // Get user ID from authenticated user

    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date), // Ensure date is in correct format
        creatorId: userId, // Set the logged-in user's ID as the creatorId
      },
    });

    res.status(200).json(newEvent); // Respond with the created event
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
};
// Get User Events
export const getUserEvents = async (req, res) => {
  try {
    const userId = req.user.id;

    const events = await prisma.event.findMany({
      where: { creatorId: userId },
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

export const getApprovedEvents = async (req, res) => {
  try {
    const approvedEvents = await prisma.event.findMany({
      where: {
        isApproved: true,
      },
    });

    if (!approvedEvents.length) {
      return res.status(404).json({ message: "No approved events found" });
    }

    return res.status(200).json(approvedEvents);
  } catch (error) {
    console.error("Error fetching approved events:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
// Delete Events
export const deleteEvent = async (res, req) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({
      where: { id },
    });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete event" });
  }
};
