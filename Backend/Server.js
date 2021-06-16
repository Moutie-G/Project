
const express = require("express");
const cors = require("cors") ;
const mongoose = require("mongoose") ;
const réservation = require ("./Routes/reservation") ;
const contact = require("./Routes/contact")
require("dotenv").config({ path: "./Config/.env" });
const connectDB = require("./Config/connectDB");


const app = express();
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use("/AddRéservation", réservation);
app.use("/contact",contact);
connectDB() ;







app.listen(port, () => console.log(`Listening on port: ${port}`));
