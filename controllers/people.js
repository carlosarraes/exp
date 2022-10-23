let { people } = require('../data');

const getPeople = (req,res) => {
  res.status(200).json({success:true, data:people});
};

const createPerson = (req,res) => {
  const {name} = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, person: name});
}

const createPersonPostman = (req,res) => {
  const { name } = req.body;
  if(!name) {
    return res.status(400).json({success:false, msg: 'Please enter a name'})
  }
  res.status(201).json({success:true, data: [...people, { name }]});

}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
  const person = people.find((someone) => someone.id === Number(req.params.id));
  
  if(!person) {
    return res.status(404).json({success:false, msg: `Person of ${req.params.id} not found`})
  }

  const newPeople = people.filter((x) => x.id !== Number(req.params.id));

  return res.status(200).json({success:true, data: newPeople})
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
}