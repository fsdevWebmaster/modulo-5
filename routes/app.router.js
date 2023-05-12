const express = require('express');
const router = express.Router();

const { Employees, Oldest, newUser, Name } = require('../controllers/app.controller');

router.get('/employees', Employees);
router.get('/employees/oldest', Oldest);
router.get('/employees/:name', Name);

router.post('/employees', newUser);

module.exports = router;


