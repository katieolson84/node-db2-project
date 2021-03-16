const express = require('express');
const Car = require('./cars-model');
const { checkCarId } = require('../cars/cars-middleware');

const router = express.Router();

// Get Car
router.get('/', (req, res, next) => {
    Car.getAll()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(next);
})

// Get Car by Id


// Post new car

// Stretch Update car

// Stretch Delete car

module.exports = router;
