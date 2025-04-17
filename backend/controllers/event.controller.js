import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const userId = req.user.id;
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        creatorId: userId,
      },
    });
    res.status(200).json(newEvent);
  } catch (error) {
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

// Get Approved Events
export const getApprovedEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { isApproved: true },
    });

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch approved events" });
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
