import { getSeats, bookSeat } from "./seats.service.js";
import ApiResponse from "../../common/utils/api-response.js";

export async function fetchSeats(req, res) {
  const seats = await getSeats();
  ApiResponse.ok(res, "seats fetched successfully", seats);
}

export async function book(req, res) {
  try {
    const { id, name } = req.params;
    await bookSeat(id, name, req.user.userId);
    res.json({ message: "Booked successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
