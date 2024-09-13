import express, {Express} from "express";
import dotenv from "dotenv";
import connectToDB from "./connections/db";
import serviceRoutes from "./routes/service.routes";
import petRoutes from "./routes/pet.routes";
import petownerRoutes from "./routes/petowner.routes";
import bookingRoutes from "./routes/booking.routes";
import cors from "cors";

dotenv.config();

const PORT: string = process.env.PORT||"8080";

const app : Express = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, ()=>{
    connectToDB();
    console.log(`Server running on port ${PORT}`);
});

app.use('/api/service', serviceRoutes);
app.use('/api/pet', petRoutes);
app.use('/api/petowner', petownerRoutes);
app.use('/api/booking',bookingRoutes);
