import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 🔹 GET /api/admin/users - All Users List (Admin Only)
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getEventByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const events = await prisma.event.findMany({
      where: {
        creatorId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        isApproved: true,
      },
    });
    res.status(200).json(events);
  } catch (error) {
    console.log("Error fetching events", error);
    res
      .status(500)
      .json({ message: "Server Error, Error while fetching events" });
  }
};

const approveEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await prisma.event.update({
      where: { id: eventId },
      data: { isApproved: true },
    });

    res.status(200).json({ message: "Event approved", event });
  } catch (error) {
    console.error("Error approving event:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
const removeEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    await prisma.event.delete({
      where: { id: eventId },
    });

    res.status(200).json({ message: "Event removed successfully" });
  } catch (error) {
    console.error("Error removing event:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  getAllUsers,
  getEventByUser,
  approveEvent,
  removeEvent,
};
