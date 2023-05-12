
const { getPage, getEmployees, getOldest, getUsers, addUser,
  getByBadge, getByName, validateNewUser } = require('../services/main.service');
  
const Employees = (req, res) => {
  let result;
  const queryLen = Object.keys(req.query).length;
  if (queryLen === 0) {
    result = getEmployees();
  }
  else {
    const qField = Object.keys(req.query)[0];
    const qValue = req.query[qField];
    switch (qField) {
      case 'page':
        result = getPage(qValue); 
      break;
      case 'user':
        result = getUsers();
      break;
      case 'badges':
        result = getByBadge(qValue);
      break;
    }
  }
  if (!result) {
    res.status(400).json({
      code: 'bad request'
    });
  }
  res.json({
    result
  });
}

const Name = (req, res) => {
  const { name } = req.params;
  if (name) {
    const user = getByName(name);
    if (!user) {
      res.status(404).json({
        code: 'not found.'
      })
    }
    res.json({ user });
  }
  else {
    req.status(400).json({ code: 'bad_request' });
  }
}

const Oldest = (req, res) => {
  try {
    const oldest = getOldest();
    res.json({
      ok: true,
      oldest
    })    
  } catch (error) {
    return res.status(500).json({ error: 'internal-server-error' });
  }
}

const Users = (req, res) => {

  res.json({
    ok: true
  });
}

const newUser = (req, res) => {
  const { body } = req;
  const valid = validateNewUser(body);
  if (valid) {
    const added = addUser(body);
    res.json({
      ok: true,
      added
    })
  }
  else {
    res.status(400).json({
      code: "bad_request"
    })
  }
}

module.exports = {
  Employees,
  Oldest,
  Users,
  newUser,
  Name
}