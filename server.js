const express = require('express');

// Middleware will be required here
const cors = require('cors');
const logger = require('morgan');
const catsRouter = require('./routes/cats');
const dogsRouter = require('./routes/dogs');



const PORT = process.env.PORT || 3000;
const app = express();

// MIDDLEWARE PIPELINE
//Middleware will be used here
app.use(cors());
app.use(logger('dev'));

//Routes will go here
app.get('/', function(req, res) {
    res.json({msg: 'Server Running!'})
});

app.use('/cats', catsRouter);
app.use('/dogs', dogsRouter);



app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`)
});


