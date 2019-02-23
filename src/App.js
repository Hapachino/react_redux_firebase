import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard} />  
          </Switch>          
        </div>
      </Router>
    );
  }
}

export default App;
