import {model, Schema} from "mongoose";
import { IService } from "../types/service.type";

const serviceSchema = new Schema<IService>({
    name:{
        type: String,
        required: true,
    },
    petID:{
        type: Schema.Types.ObjectId,
        ref: "Pet",
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum:["Pending", "Completed"],
        required: true,
    }
});

const Service = model<IService>("Service",serviceSchema);
export default Service;