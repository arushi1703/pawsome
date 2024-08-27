import {Types} from "mongoose";

export interface IPet{
    _id: Types.ObjectId;
    name: string;
    ownerID: Types.ObjectId;
    pettype: string;
    gender: "Male" | "Female";
    age: number;
    notes: string;
}