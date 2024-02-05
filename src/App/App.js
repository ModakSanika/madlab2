import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Pges/Nav'
import Home from './Home/home'
import Smart from './Smart/Smart'


function App(params) {
  return (
    <>
     <Router>
        <Nav/>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path='/Smart' component={Smart} />
        </Switch>
        <Footer />
      </Router>
     
    </>
  );
}
export default App;
