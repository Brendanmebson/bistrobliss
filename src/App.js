import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Menu from './pages/MenuPage/Menu';
import Contact from './pages/ContactPage/Contact';
import "./App.css"



function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Menu" component={Menu} />      
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
    </div>
  </Router>
  );
}

export default App;
