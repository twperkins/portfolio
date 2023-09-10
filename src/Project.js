import React from "react";
import Thumbnail from "./Thumbnail";
import './Project.scss';

const Project = ({ images, title, description }) => {
  return (
    <div className="Project">
      <h2>{title}</h2>
      <div className="project-flex">
        <Thumbnail
          image={images?.[0]}
          title={title}
          description={description}
        />
      </div>
    </div>
  )
}

export default Project;
