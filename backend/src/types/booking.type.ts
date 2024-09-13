import {Types} from "mongoose";

export interface IBooking{
    _id: Types.ObjectId;
    ownerID: Types.ObjectId;
    petID: Types.ObjectId;
    bedType: string;
    check_in: Date;
    check_out: Date;
}
