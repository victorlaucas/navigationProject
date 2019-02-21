import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Counter from './counter';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Navigation Project</h1>
            <Navbar />
            <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/counter" component={Counter} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
