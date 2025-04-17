import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split("")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    res.user = decode;
    next();
  } catch (error) {
    res.status(401).send({
      error: "You are not Authorized, Invalid Token",
    });
  }
};
