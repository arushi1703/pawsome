import {Types} from "mongoose";

export interface IService{
    _id: Types.ObjectId;
    name: string;
    petID: Types.ObjectId;
    cost: number;
    status: string;
}