// global imports
import express from "express";
import { config } from "dotenv";
import cors from "cors";

import userRouter from "./router/user.js"
import errorMiddelware from "./middelwares/ErrorHandler.js";

config({
    path: "./config/config.env"
});

const app = express();

// using middelwares
app.use(cors());
app.use(express.json());


// check route is wokring or not 
app.get("/", (req, res, next) => {
    res.status(200).send(`<h1>server is  working</h1><br><p>please check Frontend <a href="${process.env.FRONTEND_URL}">Click here</a></p>`);
});


app.use("/api/v1", userRouter);

export default app;

app.use(errorMiddelware);