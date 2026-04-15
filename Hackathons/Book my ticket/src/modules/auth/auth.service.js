import { pool } from "../../common/config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ApiError from "../../common/utils/api-error.js";

export async function registerUser(email, password) {
  const hash = await bcrypt.hash(password, 10);

  await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
    email,
    hash,
  ]);
}

export async function loginUser(email, password) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (result.rows.length === 0) throw ApiError.notfound("User not found");

  const user = result.rows[0];

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw ApiError.conflict("Invalid password");

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" },
  );

  await pool.query("UPDATE users SET refresh_token = $1 WHERE id = $2", [
    refreshToken,
    user.id,
  ]);

  return { accessToken, refreshToken };
}

export async function refreshAccessToken(refreshToken) {
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    decoded.userId,
  ]);

  const user = result.rows[0];

  if (user.refresh_token !== refreshToken) {
    throw ApiError.conflict("Invalid refresh token");
  }

  const newAccessToken = jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );

  return newAccessToken;
}
