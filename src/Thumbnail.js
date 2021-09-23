import React from 'react';
import './App.scss';

function Thumbnail(props) {
  return (
    <div className="project-card">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.image} alt={props.title} />
        <div className="project-title">{props.title}</div>
        <div className="project-description">{props.description}</div>
      </a>
    </div>
  );
}

export default Thumbnail;
