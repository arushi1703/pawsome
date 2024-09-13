import { Response, Request } from "express";
import { IBooking } from "../types/booking.type";
import Booking  from "../models/booking.model";

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
