import jwt from "jsonwebtoken";
const { verify } = jwt;
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user || user.role !== "ADMIN") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    req.user = user; // Add user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

export default isAdmin;
