import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Paginate from '../containers/Paginate';

const App = () => (
  <BrowserRouter>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Paginate />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
