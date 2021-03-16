// const express= require('express');
const Car= require('../cars/cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try{
    const cars = await Car.getById(req.params.id)
    if(!cars) {
      res.status(404).json({message: `car with id ${req.params.id} is not found`})
    }else{
      req.cars = cars
      next()
    }
  }catch (err) {
    next(err)
  }
};

const checkCarPayload = (req, res, next) => {
  try{

    if (!req.body.vin) {
      res.status(400).json({message: `vin is missing`})
    }else if (!req.body.make) {
      res.status(400).json({message: `make is missing`})
    }else if (!req.body.model) {
      res.status(400).json({message: `model is missing`})
    }else if (!req.body.mileage){
      res.status(400).json({message: `mileage is missing`})
    }else {
      next()
    }
  }catch (err) {
    next(err)
  }
}

const checkVinNumberValid = async (req, res, next) => {
  try{
    const isValidVin = vinValidator.validate(req.body.vin);
    if (!isValidVin) {
      res.status(400).json({message: `vin ${req.body.vin} is invalid`})
    }else{
      next()
    }
  }catch (err) {
    next(err)
  }
 
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const cars = await Car.getAll();
    const vin = req.body.vin;

    const data = cars.filter((item) => {
      if(item.vin === vin) {
        return vin;
      }
    })
      if( data.length > 0){
        res.status(400).json({message: `vin ${req.body.vin} already exists`})
      }else{
        next();
      }
  }catch (err) {
    next(err);
  }
  
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}