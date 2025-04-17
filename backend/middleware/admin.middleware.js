import jwt from 'jsonwebtoken';
const { verify } = jwt;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default isAdmin;