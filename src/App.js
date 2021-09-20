import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from "./Welcome.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import About from "./About.js";
import './App.scss';

function App() {
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
          <button>&gt; minimalist</button>
          <button>&gt; vibrant</button>
          <button>&gt; traditional</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
