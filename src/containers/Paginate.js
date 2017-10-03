import { connect } from 'react-redux';
import Paginator from '../components/Paginator';
import { setPage } from '../actions';

const getAmountTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.length / 3;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed).length / 3;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed).length / 3;
  }
};

const mapStateToProps = state => ({
  amount: getAmountTodos(state.todos, state.visibilityFilter.filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: (page) => {
    dispatch(setPage(page));
  },
});

const Paginate = connect(mapStateToProps, mapDispatchToProps)(Paginator);

export default Paginate;
