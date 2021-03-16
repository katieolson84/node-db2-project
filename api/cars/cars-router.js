const express = require('express');
const Car = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('../cars/cars-middleware');

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
router.get('/:id', checkCarId, async (req, res, next) => {
    try{
        const car = await Car.getById(req.params.id)
        res.status(200).json(car)
    }catch (err) {
        next(err)
    }
})

// Post new car
router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Car.create(req.body)
    .then(car => {
        res.status(201).json(car);
    })
    .catch(next)
})
// Stretch Update car
router.put('/:id', checkCarId, (req,res,next) => {
    Car.updateById(req.params.id, req.body)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(next)
})
// Stretch Delete car
router.delete('/:id', checkCarId, (req,res,next) => {
    Car.deleteById(req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(next)
})

module.exports = router;
