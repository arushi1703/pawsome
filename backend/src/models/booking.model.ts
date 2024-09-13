import {model, Schema} from "mongoose";
import { IBooking } from "../types/booking.type";

const bookingSchema = new Schema<IBooking>({
    ownerID:{
        type: Schema.Types.ObjectId,
        ref: "PetOwner",
        required: true,
    },
    petID:{
        type: Schema.Types.ObjectId,
        ref: "Pet",
        required: true,
    },
    bedType:{
        type: String,
        required: true,
    },
    check_in:{
        type: Date,
        required: true,
    },
    check_out:{
        type: Date,
        required: true
    }
});

const Booking = model<IBooking>("Booking",bookingSchema);
export default Booking;