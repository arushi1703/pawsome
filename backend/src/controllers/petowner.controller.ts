import {Request, Response} from "express";
import { IPetOwner } from "../types/petowner.type";
import PetOwner from "../models/petowner.model";

/*export const getOwner = async(req: Request, res: Response)=>{
    try{
        const { ownerID } = req.body;
        if (!ownerID){
            return res.status(400).json({error: "Pet not found."});
        }
        const owner: IPetOwner[] = await PetOwner.find({ownerID});
        res.status(200).json(owner);
    }
    catch(error){
        console.log(`ERROR in getting, petownwer controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};*/

export const getAllOwners = async(req: Request, res: Response)=>{
    try{
        const owners: IPetOwner[] = await PetOwner.find();
        if (owners.length === 0) {
            return res.status(404).json({ message: "No pet owners found." });
        }
        res.status(200).json(owners);
    }
    catch(error){
        console.log(` ERROR in getting all pet owners controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const addOwner = async(req: Request, res: Response)=>{
    try{
        const { name, phoneno, email, password, address } = req.body;
        const existingPetOwner: IPetOwner[] = await PetOwner.find({email});
        
        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        const phonenoPattern = /^\d{10}$/; // Assuming phoneno should be exactly 10 digits

        // Validation checks
        if (!name || name.trim().length === 0) {
            return res.status(400).json({ error: "Name is required" });
        }

        if (!emailPattern.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        if (!passwordPattern.test(password)) {
            return res.status(400).json({ error: "Invalid Password format" });
        }

        if (!phonenoPattern.test(phoneno)) {
            return res.status(400).json({ error: "Invalid Phone number " });
        }

        if (existingPetOwner.length !== 0){
            res.status(400).json({error: "User is already registered"});
            return;
        }
        
        const newOwner = new PetOwner({ name, phoneno, email, address });
        if (newOwner){
            await newOwner.save();
            res.status(201).send(newOwner);
        }
        else{
            res.status(400).json({ error: "Invalid data" })
        }

    }
    catch(error){
        console.log(`ERROR in adding, petownwer controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteOwner = async(req: Request, res: Response)=>{
    try{
        const { id: ownerID } = req.params;

        const owner = await PetOwner.findById(ownerID);
        if(!owner){
            res.status(500).json({ error: "No petowner to be deleted" });
            return;
        }
        await PetOwner.deleteOne();
        res.status(200).json({ message: "Owner successfully deleted" });
    }
    catch(error){
        console.log(`ERROR in deleting, petowner controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getOwnerIDByEmail = async(req: Request, res: Response)=>{
    console.log("Hellloooo");
    try{
        const { email } = req.params;

        const owner = await PetOwner.findOne({ email });
        if (!owner){
            return res.status(404).json({ error: "Owner not found" });
        }
        res.status(200).json({ ownerID: owner._id });
    }
    catch(error){
        console.log(`ERROR in getting owner id by email, petowner controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};