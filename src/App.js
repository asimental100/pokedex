import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppHeader } from './header.js';
import { NameFilter } from './NameFilter.js';
import { DetailsPage } from './DetailsPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Link to="/">Home/Search Page</Link>
        <div className='instructions'> Search The Pokedex Using The Filters On The Left! </div>
        <div className='instructions'> Click On A Pokemon To Go To Their Details Page. </div>
        <Switch>
            <Route 
                path="/" 
                exact
                render={(routerProps) => <NameFilter {...routerProps} />} 
            />
            <Route 
                path="/details/:pokeID"
                exact
                render={(routerProps) => <DetailsPage {...routerProps} />} 
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;