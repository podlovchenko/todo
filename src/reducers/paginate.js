const paginate = (state = 1, action) => {
  switch (action.type) {
    case 'PAGE':
      return action.id;
    default:
      return state;
  }
};

export default paginate;
