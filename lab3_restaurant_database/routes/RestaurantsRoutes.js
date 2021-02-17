//import express and model
const express = require('express');
const restaurantsModel = require('../models/Restaurants');
const app = express();
const fs = require('fs');

//return all restaurant details
app.get('/restaurants', async(req, res) => {
  const restaurants = await restaurantsModel.find({})

  try {
    
    res.send(restaurants);
  } catch(err) {
    res.status(500).send(err);
  }
})

app.get('/restaurants/database/dumps', async (req, res) => {
  try {
    //read json data
    fs.readFile('restaurant_data.json', (err, data) => {
      if(err) {
        res.send(err)
      } else {
        console.log(JSON.parse(data))
        //create model
        restaurantsModel.create(JSON.parse(data))
      }
    })
    res.send(JSON.stringify({status: true, messsage: 'Record Inserted'}))
  } catch (err){
    res.status(500).send(err);
  }
})

module.exports = app;