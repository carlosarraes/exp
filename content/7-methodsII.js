const express = require('express');
const colors = require('colors')
const app = express();
const people = require('./routes/people');
const login = require('./routes/auth');

app.use(express.static('./public/methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/api/people', people)
app.use('/login', login)

app.listen(5000, () => {
  console.log('Server is listening on port 5000...'.blue)
})
