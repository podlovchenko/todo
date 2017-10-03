import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  });

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
      // dispatch(push('/page/1'));
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  });

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink
