import { pool } from "../../common/config/db.js";
import ApiError from "../../common/utils/api-error.js";

export async function getSeats() {
  const result = await pool.query("SELECT * FROM seats");
  return result.rows;
}

export async function bookSeat(seatId, name, userId) {
  const conn = await pool.connect();

  try {
    await conn.query("BEGIN");

    const result = await conn.query(
      "SELECT * FROM seats WHERE id = $1 AND isbooked = 0 FOR UPDATE",
      [seatId],
    );

    if (result.rowCount === 0) {
      throw  ApiError.conflict("Seat already booked");
    }

    await conn.query(
      "UPDATE seats SET isbooked = 1, name = $2, user_id = $3 WHERE id = $1",
      [seatId, name, userId],
    );

    await conn.query("COMMIT");
  } catch (err) {
    await conn.query("ROLLBACK");
    throw err;
  } finally {
    conn.release();
  }
}
