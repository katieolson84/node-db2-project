// const express= require('express');
const Car= require('../cars/cars-model');

const checkCarId = async (req, res, next) => {
  try{
    const carsId = await Car.getAll(req.params.id)
    if(!cars) {
      res.status(400).json({message: `care with id ${carsId} is not found`})
    }else{
      req.carsId = carsId
      next()
    }
  }catch (err) {
    next(err)
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
}