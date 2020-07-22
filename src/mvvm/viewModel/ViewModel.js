import Model from '../model/Model';

const userView = {
  firstName: '',
  lastName: '',
};

const getUserModelData = () => {
  const data = Model.getUserObject();
  userView.firstName = data.firstName;
  userView.lastName = data.lastName;
};

const setUserModelData = (fName, lName) => {
  Model.setFirstName(fName);
  Model.setLastName(lName);
};

const getUserData = () => {
  getUserModelData();
  return userView;
};

const setUserData = (fName, lName) => {
  userView.firstName = fName;
  userView.lastName = lName;
  setUserModelData(fName, lName);
};

export default {
  getUserData,
  setUserData,
};
