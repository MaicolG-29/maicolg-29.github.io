import type {Project} from "../types/Project";

interface ProjectCardProps {
    project: Project;
}


function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div>
        <strong>Technologies:</strong>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div>
        <span>Type: {project.type}</span>
        <span> | Difficulty: {project.difficulty}</span>
      </div>

      <div>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

      {/* --Aquí va estilo para Card-- */}
    </article>
  );
}

export default ProjectCard;