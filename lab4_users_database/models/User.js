const mongoose = require('mongoose');

//user schema
const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    minLength: 4,
  }, 
  email: {
    type: String,
    required: true,
    //regex to ensure email format
    validate(val) {
      var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return emailRegex.test(val);
    }
  },
  city: {
    type: String,
    required: true,
    //regex letters and spaces only
    validate(val) {
      var regex = /^[a-zA-Z\s]*$/;  
      return regex.test(val)
    }
  },
  web: {
    type: String,
    required: true,
    //regex valid web url http/https
    validate(val) {
      var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
      return regex.test(val)
    }
  },
  Zip: {
    type: String,
    required: true,
    //regex
    validate(val) {
      var regex = /^[0-9]{5}(-[0-9]{4})$/gi;
      return regex.test(val)
    }
  },
  phone: {
    type: String,
    required: true,
    //regex
    validate(val) {
      var regex = /^\d{1}-\d{3}-\d{3}-\d{4}$/gm;
      return regex.test(val) 
    }
  }
})

UserSchema.post('validate', (doc) => {
  console.log(`%s has been validated (but not saved)`, doc._id)
})

UserSchema.post('save', (doc) => {
  console.log(`%s has been saved`, doc._id)
})

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;