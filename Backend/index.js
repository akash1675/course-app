import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./routes/book.route.js"

const app = express();

app.use(cors());
dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

 
//connect to MongoDb
try{
   mongoose.connect(URI);
   console.log("connect to MongoDb");
}
catch(error){ 
   console.log("Error :" , error);
}

//define routes
app.use("/book", bookRoute)

app.listen(port, ()=>{
   console.log(`app listen in ${port}`);
})