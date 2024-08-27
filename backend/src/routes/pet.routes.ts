import { Router } from "express";
import { addPet, deletePet,getAllPets,getPet, getPetIDByOwnerID } from "../controllers/pet.controller";

const router: Router = Router();

router.post("/add", addPet);

router.get("/get/:id", getPet);

router.get("/getall", getAllPets);

router.get("/getID/:ownerID", getPetIDByOwnerID);

router.delete("/delete/:id", deletePet);

export default router;
