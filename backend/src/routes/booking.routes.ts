import { Router } from "express";
import { addBooking } from "../controllers/booking.controller";

const router: Router = Router();

router.post('/add', addBooking);

export default router;