import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import paginate from './paginate';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  paginate,
});

export default todoApp;
