import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from "./Welcome.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js";
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const addMono = (event) => {
    document.body.classList.add('mono');
    document.body.classList.remove('tint');
    document.body.classList.remove('type');
  }

  const addTint = (event) => {
    document.body.classList.add('tint');
    document.body.classList.remove('mono');
    document.body.classList.remove('type');
  }

  const addType = (event) => {
    document.body.classList.add('type');
    document.body.classList.remove('mono');
    document.body.classList.remove('tint');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="logo" alt="Logo" />
          <div className="navigation-sub">
            <Link to="/" className="item">&lt;Welcome /&gt;</Link>
            <Link to="/projects" className="item">&lt;Projects /&gt;</Link>
            <Link to="/about" className="item">&lt;About /&gt;</Link>
            <Link to="/contact" className="item">&lt;Contact /&gt;</Link>
          </div>
        </div>

        <Route exact path="/" component={Welcome} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        <div className="display-options">
          <i className="fa fa-adjust" onClick={addMono}></i>
          <i className="fa fa-paint-brush" onClick={addTint}></i>
          <i className="fa fa-newspaper-o" onClick={addType}></i>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
