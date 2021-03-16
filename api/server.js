const express = require("express");
const helmet = require('helmet');

const carsRouter = require('./cars/cars-router');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);

server.use("/", (req,res) => {
    res.json("Cars API")
})

// middleware
server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: "Something is terribly wrong"
    })
})

module.exports = server
