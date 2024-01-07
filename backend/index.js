import express, { request, response } from "express";
import { config as configDotenv } from "dotenv";
// import { PORT, mongoDBURL } from "./";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

configDotenv(); // Configure dotenv

const app = express();
const PORT = process.env.PORT || 6000;


// from frontend to backend || from database to frontend *********************************************
// middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// OPTION 1: Allow All Origins with Default of cors(*)
app.use(cors());
// OPTION 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log("request from backend peeps: ",request);
  return response.status(200).send("welcome peeps");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

