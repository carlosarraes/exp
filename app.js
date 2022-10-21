const express = require('express');
const colors = require('colors')
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]);

app.get('/', (req,res)=>{
  res.send('Home')
})

app.get('/about', (req,res)=>{
  console.log(req.user);
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...'.blue)
})
