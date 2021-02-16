//get required imports
const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/RestaurantsRoutes');

const app = express();
app.use(express.json());

//connection string
mongoose.connect('mongodb+srv://Nick:Boon1997@cluster0.3uodd.mongodb.net/gbc_full_stack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(restaurantsRouter);

//deploy server on port 8081
app.listen(8081, () => {console.log(`Server is running on 8081`)});