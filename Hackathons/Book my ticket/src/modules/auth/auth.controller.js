import { registerUser, loginUser, refreshAccessToken } from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    await registerUser(email, password);
    ApiResponse.created(res, "User registered");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const tokens = await loginUser(email, password);
    ApiResponse.ok(res, "user Logged in successfully", tokens);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function refresh(req, res) {
  try {
    const { refreshToken } = req.body;
    const accessToken = await refreshAccessToken(refreshToken);
    ApiResponse.ok(res, "Access token refreshed successfuly", accessToken);
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
}
