const mongoose = require('mongoose');

//define restauraunt schema
const RestaurantSchema = new mongoose.Schema({
  //address is an object
  address: {
    building: {
      type: Number,
    },
    street: {
      type: String,
      required: [true, 'Street is required'],
    },
    zipcode: {
      type: Number,
      required: [true, 'Zip Code is required'],
    }
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  cuisine: {
    type: String,
    required: [true, 'Cuisine is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Name must be unique']
  },
  restaurant_id: {
    type: Number,
    required: [true, 'Restaurant ID is required'],
    unique: [true, 'Restaurant ID must be unique']
  },
})

const Restaurants = mongoose.model('Restaurants', RestaurantSchema);
module.exports = Restaurants;