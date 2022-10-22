const express = require('express');
const colors = require('colors')
const app = express();
let { people } = require('./data');

app.use(express.static('./public/methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/api/people', (req,res) => {
  res.status(200).json({success:true, data:people});
});

app.post('/api/people', (req,res) => {
  const {name} = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, person: name});
});

app.post('/api/postman/people', (req,res) => {
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, data: [...people, { name }]});

})

app.post('/login', (req,res) => {
  const {name} = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`)
  }

  return res.status(401).send(`User not logged in.`)
});

app.put('/api/people/:id', (req,res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((someone) => someone.id === Number(id));

  if(!person) {
    return res.status(404).json({success:false, msg: 'Person not found'})
  }
  const newPeople = people.map((x) => {
    if (x.id === Number(id)) {
      x.name = name;
    }

    return x
  })
  return res.status(200).json({success:true, data: newPeople})
})

app.delete('/api/people/:id', (req,res) => {
  const person = people.find((someone) => someone.id === Number(req.params.id));
  
  if(!person) {
    return res.status(404).json({success:false, msg: `Person of ${req.params.id} not found`})
  }

  const newPeople = people.filter((x) => x.id !== Number(req.params.id));

  return res.status(200).json({success:true, data: newPeople})
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...'.blue)
})
