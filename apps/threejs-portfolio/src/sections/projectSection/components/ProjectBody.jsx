import { Projects } from "@repo/portfolio-details";
import ProjectCard from "./ProjectCard";

const ProjectBody = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between lg:justify-start md:items-start pt-4 lg:mr-96 mb-24 md:mb-0">
      {Projects.map((project) => {
        return <ProjectCard key={project.name} project={project} />;
      })}
    </div>
  );
};

export default ProjectBody;
