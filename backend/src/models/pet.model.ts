import {model, Schema} from "mongoose";
import { IPet } from "../types/pet.type";
import Petowner from "./petowner.model";

const petSchema = new Schema<IPet>({
    name:{
        type: String,
        required: true,
    },
    ownerID:{
        type: Schema.Types.ObjectId,
        ref: "Petowner",
        required: true,
    },
    pettype:{
        type: String,
        enum: ["Cat", "Dog"],
        required: true,
    },
    gender:{
        type: String,
        enum: ["Male", "Female"],
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    notes:{
        type: String,
        required: false,
    }
});

const Pet = model<IPet>("Pet",petSchema);
export default Pet;