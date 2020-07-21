import Model from '../model/Model';

export const getUser = () => {
  const firstName = Model.getFirstName();
  const lastName = Model.getLastName();
  return {firstName, lastName};
};

export const setUser = (fName, lName) => {
  Model.setFirstName(fName);
  Model.setLastName(lName);
};
