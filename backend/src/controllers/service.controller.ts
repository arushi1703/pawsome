import {Request, Response} from "express";
import { IService } from "../types/service.type";
import Service from "../models/service.model";
import Pet from "../models/pet.model";
import { IPet } from "../types/pet.type";

export const getServices = async(req: Request, res: Response) => {
    try{
        const { id: petID } = req.params;
        
        if (!petID){
            return res.status(400).json({error: "Pet not found."});
        }

        const services: IService[] = await Service.find({petID});
        res.status(200).json(services);
    }
    catch (error) {
        console.log(` ERROR in getting service controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

export const getAllServices = async(req: Request, res: Response)=>{
    console.log("Fetching all services");
    try{
        const services: IService[] = await Service.find();
        if (services.length === 0) {
            return res.status(404).json({ message: "No services found." });
        }
        const servicesWithPetNames = await Promise.all(
            services.map(async (service) => {
                const pet = await Pet.findById(service.petID);
                return {
                    id: service._id,
                    name: service.name,
                    petName: pet?.name || "Unknown Pet", // Handle case where pet is not found
                    status: service.status,
                };
            })
        );
        //console.log(servicesWithPetNames);
        res.status(200).json(servicesWithPetNames);
    }
    catch(error){
        console.log(` ERROR in getting all services controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const addServices = async(req: Request, res: Response)=>{
    console.log("adding sevices");
    try{
        const { services, petID } = req.body;

        if (!services || !petID) {
            return res.status(400).json({ error: "Invalid input. " });
        }

        const serviceDocs = services.map((serviceName: IService)=>({
            name: serviceName,
            petID: petID,
            cost: 2000,
            status: "Pending"
        }));

        const newServices = await Service.insertMany(serviceDocs);
        if(!newServices){
            return res.status(400).json({ error: "Services could not be inserted. " });
        }
        res.status(201).json({ services: newServices });
    }
    catch(error){
        console.log(`ERROR in adding, service controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const completeService = async(req: Request, res: Response)=>{
    try{
        const { id: serviceID } = req.params;

        const updatedService = await Service.findByIdAndUpdate(
            serviceID,
            { status : "Completed" },
            { new : true }
        );

        if (!updatedService){
            return res.status(404).json({ error: "Service not found" });
        }
        res.status(200).json(updatedService);
    }
    catch(error){
        console.log(`ERROR in updating, service controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const deleteService = async(req: Request, res: Response)=>{
    try{
        const { id: serviceID } = req.params;

        const service = await Service.findById(serviceID);
        if(!service){
            res.status(500).json({ error: "No service to be deleted" });
            return;
        }
        await service.deleteOne();
        res.status(200).json({ message: "Service successfully deleted" });
    }
    catch(error){
        console.log(`ERROR in deleting, service controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
