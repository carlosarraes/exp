const express = require('express');
const router = express.Router();
let { people } = require('../data');

router.get('/', (req,res) => {
  res.status(200).json({success:true, data:people});
});

router.post('/', (req,res) => {
  const {name} = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, person: name});
});

router.post('/postman', (req,res) => {
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, data: [...people, { name }]});

})

router.put('/:id', (req,res) => {
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

router.delete('/:id', (req,res) => {
  const person = people.find((someone) => someone.id === Number(req.params.id));
  
  if(!person) {
    return res.status(404).json({success:false, msg: `Person of ${req.params.id} not found`})
  }

  const newPeople = people.filter((x) => x.id !== Number(req.params.id));

  return res.status(200).json({success:true, data: newPeople})
})

module.exports = router;