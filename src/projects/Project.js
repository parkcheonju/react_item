import React from "react";
import "./project.css";
import Card from "../ui/Card";
const Project = ({ img, name, desc, tech, git }) => {
  return (
    <Card className='project'>
      <Card>
        <img src={img} alt={img} />
        <h3>{name}</h3>
        <button>
          <a href={git}>git</a>
        </button>
        <ul>
          <li>설명 : {desc} </li>
          <li>기술 : {tech}</li>
        </ul>
      </Card>
    </Card>
  );
};

export default Project;
