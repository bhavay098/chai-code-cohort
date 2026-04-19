import jwt from "jsonwebtoken";
import ApiError from "../utils/api-error.js";

export function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw ApiError.unauthorized("Not authenticated");

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch {
    throw ApiError.unauthorized("Invalid token");
  }
}
