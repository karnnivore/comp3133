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
    },
    zipcode: {
      type: Number,
    }
  },
  city: {
    type: String,
  },
  cuisine: {
    type: String,
  },
  name: {
    type: String,
  },
  restaurant_id: {
    type: Number,
  },
})

const Restaurants = mongoose.model('Restaurants', RestaurantSchema);
module.exports = Restaurants;