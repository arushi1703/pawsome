import {Types} from "mongoose";

export interface IPetOwner{
    _id: Types.ObjectId;
    name: string;
    phoneno: string;
    email: string;
    address: string;
}