let employees = require('./../employees.json');

const getEmployees = () => {
  return employees;
}

const getPage = (pageNumber) => {
  pageNumber = parseInt(pageNumber);
  let pageItems = [];
  let indexes = [];
  const first = 2 * (pageNumber - 1);
  const last = first + 1;

  indexes = [...indexes, first, last];
  indexes.forEach((item) => {
    pageItems = [ ...pageItems, employees[item] ];
  });
  return pageItems;
}

const getOldest = () => {
  const maxAge = Math.max(...employees.map(item => item.age));
  const oldest = employees.find(item => item.age === maxAge);
  return oldest;
}

const getUsers = () => {
  const users = employees.filter(item => item.privileges === 'user');
  return users;
}

const addUser = (addingData) => {
  employees = [...employees, addingData];
  return addingData;
}

const getByBadge = (badgeType) => {
  const result = employees.filter(item => item.badges.includes(badgeType));
  return result;
}

const getByName = (name) => {
  const result = employees.find(item => item.name === name);
  return result;
}

const validateNewUser = (newData) => {
  valid = false;
  if (Object.keys(employees[0] === Object.keys(newData))) {
    valid = true;
  }
  return valid;
}

module.exports = {
  getEmployees,
  getPage,
  getOldest,
  getUsers,
  addUser,
  getByBadge,
  getByName,
  validateNewUser
}