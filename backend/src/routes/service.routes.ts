import { Router } from "express";
import { addServices, completeService, deleteService, getAllServices, getServices } from "../controllers/service.controller";

const router: Router = Router();

router.get("/get/:id", getServices);

router.get("/getall", getAllServices);

router.post("/add", addServices);

router.patch("/complete/:id", completeService);

router.delete("/delete/:id", deleteService);

export default router;
