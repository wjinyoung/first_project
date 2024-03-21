const { config } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose"); //데이터 베이스 연결
require('dotenv'),config();
const cors = require("cors");
const app = express();
app.use(cors());


mongoose
    .connect(process.env.DB,  {
        useNewUrlparser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("connected to database")); //연결이 됐다면 connected to database 띄워줘랑


module.exports = app