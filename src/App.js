import React from 'react';
import './App.css';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
       <Router>
         <Switch>
           <Route path="/search">
              <SearchPage />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;

