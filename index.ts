import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/routers/router";

const PORT = 3000;
const app = express();
const DB_URL = 'mongodb://localhost:27017/dbdemo';

app.use(bodyParser.json());

mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use("/api", router);

app.listen(PORT, () => {
    console.log("App running on port: "+ PORT)
})