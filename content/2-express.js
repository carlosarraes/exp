const express = require('express');
const app = express();
const path = require ('path');
const colors = require('colors');

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
})

app.listen(5000, () => {
  console.log('Server listening on port 5000...'.blue);
})