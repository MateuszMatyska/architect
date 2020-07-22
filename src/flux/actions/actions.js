export const increment = () => {
  return async dispatch => {
    dispatch({
      type: 'INCREMENT',
    });
  };
};

export const decrement = () => {
  return async dispatch => {
    dispatch({
      type: 'DECREMENT',
    });
  };
};
