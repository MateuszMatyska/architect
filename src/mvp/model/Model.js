import Model from '../../mvc/model/Model';

export const User = {
  firstName: 'Name',
  lastName: 'LastName',
};

const getFirstName = () => {
  return User.firstName;
};

const setFirstName = name => {
  User.firstName = name;
};

const getLastName = () => {
  return User.lastName;
};

const setLastName = name => {
  User.lastName = name;
};

export default {getFirstName, getLastName, setFirstName, setLastName};
