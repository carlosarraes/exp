const express = require('express');
const colors = require('colors')
const app = express();
let { people } = require('./data');

app.use(express.static('./public/methods-public'))
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req,res) => {
  res.status(200).json({success:true, data:people});
});

app.post('/api/people', (req,res) => {
  res.status(201).send('success');
});

app.post('/login', (req,res) => {
  const {name} = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`)
  }

  return res.status(401).send(`User not logged in.`)
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...'.blue)
})
