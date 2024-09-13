import { Router } from "express";
import { addBooking, getAllBookings, getBooking } from "../controllers/booking.controller";

const router: Router = Router();

router.post('/add', addBooking);

router.get('/get/:id', getBooking);

router.get('/getAll', getAllBookings);

export default router;