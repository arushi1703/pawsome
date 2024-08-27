import {model, Schema} from "mongoose";
import { IPetOwner } from "../types/petowner.type";

const petownerSchema = new Schema<IPetOwner>({
    name:{
        type: String,
        required: true,
    },
    phoneno:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required: true,
    }
});

const PetOwner = model<IPetOwner>("PetOwner",petownerSchema);
export default PetOwner;