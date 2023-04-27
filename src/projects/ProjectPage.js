import React, { useEffect, useState } from "react";
import { projectPageData } from "../assets/db";
import Project from "./Project";
import Card from "../ui/Card";

const ProjectPage = () => {
  const { intro, projectsData } = projectPageData;
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    //빈 배열 안에 계속해서 값을 추가해나가는 구조
    const cache = [];
    projectsData.map((project) => cache.push(project));
    setProjectData(cache);
  }, []);
  return (
    <Card className="page">
      <h1>{intro}</h1>
      {projectData.map((project,i)=>{
        console.log("😀",project)
        return (<Project key={i} img={project.image} name={project.name} desc={project.desc} tech={project.tech} git={project.git} />)
      })}
    </Card>
  );
};
export default ProjectPage;
