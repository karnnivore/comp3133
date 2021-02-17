const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.user(express.json());

//connection string
mongoose.connect('mongodb+srv://Nick:Boon1997@cluster0.3uodd.mongodb.net/gbc_full_stack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to database')
  }
})

app.use(userRouter);

//deploy on port 8081
app.listen(8081, () => {console.log('Server is running on port 8081')})