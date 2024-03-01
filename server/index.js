const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(express.json());

dotenv.config({
  path: "./config.env",
});

require("./DB/connection");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const skelton = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    interest: String,
    occupation: String,
    company:String
})

const body = mongoose.model("pool", skelton);


app.post("/register", async (req, res) => {
    try {
        const { name, email, phone, interest, occupation, company } = req.body;
        let transfer = await body.create({ name: name, email: email, phone: phone, interest: interest, occupation: occupation, company: company });
        await transfer.save()
        console.log('data saved');
    } catch (err) {
        console.log("error saving data");
    }
    
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(4000);
