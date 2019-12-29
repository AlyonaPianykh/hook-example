import React from 'react';
import BookContextProvider from './contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import List, {TYPES} from './components/List';
import './App.css';

const App = () => {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/booklist-fetch'>
            <List type={TYPES.BEST_SELLERS}/>
          </Route>
          <Route exact path='/booklist-collection'>
            <List type={TYPES.FICTION}/>
          </Route>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
};

export default App;
