const user = {
  firstName: 'Name',
  lastName: 'LName',
};

const getFirstName = () => {
  return user.firstName;
};

const setFirstName = name => {
  user.firstName = name;
};

const getLastName = () => {
  return user.lastName;
};

const setLastName = name => {
  user.lastName = name;
};

export default {
  getFirstName,
  getLastName,
  setFirstName,
  setLastName,
};
