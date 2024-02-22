import express from "express";
import { configDotenv } from "dotenv";

const app = express()   

app.use(express.Router())// for making routes

app.use(express.json()) 

configDotenv()

app.listen(process.env.PORT , () => console.log(`server started on ${process.env.PORT}`))

console.log("port" , process.env.PORT);



