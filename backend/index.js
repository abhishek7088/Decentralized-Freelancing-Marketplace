import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hello server is ready")
})

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`);
    
})