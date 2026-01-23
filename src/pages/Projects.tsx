import projects from "../data/projects"
import Projectcard from "../components/ProjectCard"

const Projects = () => {
  console.log(projects)
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <Projectcard key={project.id} project={project}/>
      ))}

      {/* --Aquí va layout de Projects-- */}
    </section>
  );
};

export default Projects;