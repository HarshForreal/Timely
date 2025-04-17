import { PrismaClient } from '@prisma/client';
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

export default {
  getAllUsers,
};
