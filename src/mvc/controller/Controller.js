import userModel from '../model/Model';

export const getUserData = () => {
  const fName = userModel.getFirstName();
  const lName = userModel.getLastName();

  return {
    fName,
    lName,
  };
};

export const setUserData = (fName, lName) => {
  userModel.setFirstName(fName);
  userModel.setLastName(lName);
};
