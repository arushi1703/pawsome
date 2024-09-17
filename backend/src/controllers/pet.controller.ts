import {Request, Response} from "express";
import { IPet } from "../types/pet.type";
import Pet from "../models/pet.model";
import PetOwner from "../models/petowner.model";

export const getPet = async(req: Request, res: Response)=>{
    console.log("fetching pet details by id");
    try{
        const { id: petID } = req.params;
        
        if (!petID){
            return res.status(400).json({error: "Pet not found."});
        }

        const pet : IPet[] | null = await Pet.findById(petID);
        res.status(200).json(pet);
    }
    catch (error) {
        console.log(` ERROR in getting pet controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllPets = async(req: Request, res: Response)=>{
    console.log("fetching all pets");
    try{
        try{
            const pets: IPet[] = await Pet.find();
            if (pets.length === 0) {
                return res.status(404).json({ message: "No pets found." });
            }
            const allpets = await Promise.all(
                pets.map(async (pet) => {
                    const owner = await PetOwner.findById(pet.ownerID);
                    return {
                        id: pet._id,
                        name: pet.name,
                        ownerName: owner?.name || "Unknown Owner", // Handle case where owner is not found
                        age: pet.age,
                        gender: pet.gender,
                        notes: pet.notes
                    };
                })
            );
            res.status(200).json(allpets);
        }
        catch(error){
            console.log(` ERROR in getting all pets controller: ${(error as Error).message}`);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    catch(error){
        console.log(` ERROR in getting all pets controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getPetIDByOwnerID = async(req: Request, res: Response)=>{
    console.log("Getting petID by ownerID");
    try{
        const { ownerID } = req.params;

        const pet = await Pet.findOne({ ownerID });
        if (!pet) {
            return res.status(404).json({ error: "Pet not found" });
        }
        res.status(200).json({ petID: pet._id });
    }
    catch(error){
        console.log(` ERROR in getting pet id from owner id, pets controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const addPet = async(req: Request, res: Response)=>{
    try{
        const { name, ownerID, pettype, gender, age, notes} = req.body;

        const existingPet: IPet[] = await Pet.find({
            name,
            ownerID
        });
        
        if (existingPet.length!==0){
            res.status(400).json({error: "Pet is already registered"});
            return;
        }

        const newPet = new Pet({ name, ownerID, pettype, gender, age, notes });
        if(newPet){
            await newPet.save();
            res.status(201).send({
                _id: newPet._id,
                name: newPet.name,
                ownerID: newPet.ownerID,
                pettype: newPet.pettype,
                gender: newPet.gender,
                age: newPet.age,
                notes: newPet.notes
            });
        }
        else{
            res.status(400).json({ error: "Invalid data" })
        }
    }
    catch(error){
        console.log(`ERROR in adding, pet controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deletePet = async(req: Request, res: Response)=>{
    try{
        const { id: petID } = req.params;

        const pet = await Pet.findById(petID);
        if(!pet){
            res.status(500).json({ error: "No pet to be deleted" });
            return;
        }
        await Pet.deleteOne();
        res.status(200).json({ message: "Pet successfully deleted" });
    }
    catch(error){
        console.log(`ERROR in deleting, pet controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}