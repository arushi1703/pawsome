import { Router } from "express";
import { addOwner, deleteOwner, getAllOwners, getOwnerIDByEmail } from "../controllers/petowner.controller";


const router: Router = Router();

router.post("/add", addOwner);

router.delete("/delete/:id", deleteOwner);

//router.get("/get", getOwner);

router.get("/getall", getAllOwners);

router.get("/getID/:email", getOwnerIDByEmail);

export default router;