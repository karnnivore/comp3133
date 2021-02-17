
const express = require('express')
const userModel = require('../models/User')
const app = express()
const fs = require('fs');

app.post('/users', async(req, res) => {
  try {
    fs.readFile('UsersData.json', (err, data) => {
      if(err){
        res.send(err)
      } else {
        console.log(JSON.parse(data))
      }
    })
    res.send(JSON.stringify({status: true, message: 'Record Inserted successfully'}))
  } catch(err) {
    res.status(500).send(err);
  }
})

module.exports = app;