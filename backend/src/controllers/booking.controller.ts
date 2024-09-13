import { Response, Request } from "express";
import { IBooking } from "../types/booking.type";
import Booking  from "../models/booking.model";
import PetOwner from "../models/petowner.model";
import Pet from "../models/pet.model";


export const getBooking = async(req: Request, res: Response)=>{
    try{
        const { id: bookingID } = req.params;
        if (!bookingID){
            return res.status(400).json({error: "Booking not found."});
        }

        const booking : IBooking[] | null = await Booking.findById(bookingID);
        res.status(200).json(booking);
    }
    catch(error){
        console.log(`ERROR in getting by id, booking controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllBookings = async(req: Request, res: Response)=>{
    console.log("Fetching all bookings");
    try{
        try{
            const bookings: IBooking[] = await Booking.find();
            if (bookings.length === 0) {
                return res.status(404).json({ message: "No bookings found." });
            }
            const allbookings = await Promise.all(
                bookings.map(async (booking) => {
                    const owner = await PetOwner.findById(booking.ownerID);
                    const pet = await Pet.findById(booking.petID);
                    return {
                        id: booking._id,
                        ownerName: owner?.name || "Unknown Owner", // Handle case where owner is not found
                        petName: pet?.name || "Unknown Pet",
                        check_in: booking.check_in,
                        check_out: booking.check_out
                    };
                })
            );
            res.status(200).json(allbookings);
        }
        catch(error){
            console.log(` ERROR in getting all pets controller: ${(error as Error).message}`);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    catch(error){
        console.log(`ERROR in getting all bookings, booking controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const addBooking = async(req: Request, res: Response)=>{
    try{
        console.log("adding booking");
        const { ownerID, petID, bedType, check_in, check_out} = req.body;

        const existingBooking: IBooking[] = await Booking.find({
            ownerID,
            petID
        });
        
        if (existingBooking.length!==0){
            res.status(400).json({error: "Booking is already made"});
            return;
        }

        const newBooking = new Booking({ ownerID, petID, bedType, check_in, check_out });
        if(newBooking){
            await newBooking.save();
            res.status(201).send({
                _id: newBooking._id,
                ownerID: newBooking.ownerID,
                petID: newBooking.petID,
                bedType: newBooking.bedType,
                check_in: newBooking.check_in,
                check_out: newBooking.check_out
            });
        }
        else{
            res.status(400).json({ error: "Invalid data" })
        }
    }
    catch(error){
        console.log(`ERROR in adding, booking controller: ${(error as Error).message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
