const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController');
const propertyController = require('./controllers/authController')
const uploadController = require('./controllers/uploadController')
const app = express()

// mongoDB connect 

mongoose.connect(process.env.MONGO_URL,  console.log('Mongodb has been started with success'))

//middlewares & routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/upload", uploadController);

//starting server

app.listen(process.env.PORT, () => console.log('server has been started with success'))