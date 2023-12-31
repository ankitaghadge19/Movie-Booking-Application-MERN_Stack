import express from "express";
import { deleteBooking, getAllBookings, getBookingById, newBooking } from "../controllers/booking-controller";

const bookingsRouter = express.Router();

bookingsRouter.get('/:id', getBookingById);
bookingsRouter.post('/', newBooking);
bookingsRouter.delete("/:id", deleteBooking);
bookingsRouter.get('/', getAllBookings);

export default bookingsRouter;