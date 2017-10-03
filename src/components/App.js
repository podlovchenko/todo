import React from 'react';
import { IndexRoute } from 'react-router';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Paginate from '../containers/Paginate';

const App = () => (
  <div>
    <AddTodo />
    <Route exact path="/" component={VisibleTodoList} />
    <Route path="/page/:page" component={VisibleTodoList} />
    <Paginate />
    <Footer />
  </div>
);

export default App;
