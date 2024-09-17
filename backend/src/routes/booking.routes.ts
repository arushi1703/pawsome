import { Router } from "express";
import { addBooking, deleteBooking, editBooking, getAllBookings, getBooking } from "../controllers/booking.controller";

const router: Router = Router();

router.post('/add', addBooking);

router.get('/get/:id', getBooking);

router.get('/getAll', getAllBookings);

router.delete('/delete/:id', deleteBooking);

router.patch('/edit/:id', editBooking);

export default router;