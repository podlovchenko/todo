const initialState = {
  page: 1,
  filter: 'SHOW_ALL',
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        page: action.page,
        filter: state.filter,
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        page: 1,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
