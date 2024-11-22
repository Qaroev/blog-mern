import express from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import {validationResult} from "express-validator"
import {registerValidator} from "./validation/auth.js"

mongoose.connect("mongodb+srv://gulboy:admin@cluster0.i1mzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("DB OK")
}).catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("asdsadHello World!");
})
app.post("/auth/register", registerValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array())
    }
    res.json({
        success: true
    })
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("Start server");
})
