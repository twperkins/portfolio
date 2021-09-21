import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

function Thumbnail(props) {
  return (
    <div className="project-card">
      <Link to={props.link}>
        <img className="project-image" src={props.image} alt={props.title} />
        <div className="project-title">{props.title}</div>
        <div className="project-description">{props.description}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
