//import express and model
const express = require('express');
const restaurantsModel = require('../models/Restaurants');
const app = express();
const fs = require('fs');

//#4/#6return all restaurant details
app.get('/restaurants', async(req, res) => {
  let restaurants

  if(req.query.sortBy){
    //if asc true sortflag = 1 else -1
    const flag = req.query.sortBy == 'ASC' ? 1 : -1
    //sort restaurants by id and display data
    restaurants = await restaurantsModel.find({}).sort({'restaurant_id' : flag}).select('restaurant_id cuisines name city address')
  } else { //no sort by flag return all values
    restaurants = await restaurantsModel.find({})
  }
 
  try {
    res.send(restaurants);
  } catch(err) {
    res.status(500).send(err);
  }
})

//5. return all restaurant details by cuisine
app.get('/restaurants/cuisine/:name', async(req, res) => {
  //get restaurant details
  const cuisine = req.params.name;
  const restaurants = await restaurantsModel.find({cuisine : cuisine})

  try {
    if (restaurants.length != 0) {
      res.send(restaurants)
    } else {
      res.send(JSON.stringify({status: false, message: 'No data found'}))
    }
  } catch(err) {
    res.status(500).send(err);
  }
})

// //6. Return selected columns sort by asc or desc
// app.get('/restaurants?sortBy=', async(req, res) => {

//     try {
//       res.send(restaurants);
//     } catch (err) {
//       res.status(500).send(err);
//     }
// })

//7. Cuisines equal to Delicatessen and city not equal to brooklyn - include cuisine, name city, exlude id sort asc name
app.get('/restaurants/Delicatessen', async(req, res) => {
  try {
    await restaurantsModel.find({}).where('cuisine', 'Delicatessen').where('city').ne('Brooklyn').sort('name').select('cuisine name city')
    .exec((err, data) => {
      if (err) {
        res.send(JSON.stringify({status: false, message: 'No Delicatessens'}))
      } else {
        res.send(data);
      }
    })
  } catch (error) {
    res.status(500).send(error);
  } 
})

//create all the data needed for the database
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