
const ProjectCard = ({ project }) => {
  return (
    <article className="project-card group">

      {/* Project visual */}
      <div className="project-visual">

        <div className="project-visual-inner">
          <i
            className={`bi ${project.icon}`}
            aria-hidden="true"
          ></i>

          <span>PROJECT {String(project.id).padStart(2, '0')}</span>
        </div>

        {project.featured && (
          <span className="project-featured">
            Featured
          </span>
        )}

      </div>

      {/* Project information */}
      <div className="project-card-content flex flex-1 flex-col">

        <p className="section-label mb-3">
          {project.category}
        </p>

        <h3 className="text-xl font-bold leading-snug">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-text-muted)]">
          {project.description}
        </p>
        <br />
        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2 pb-6">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="skill-badge"
            >
              {technology}
            </span>
          ))}

        </div>

        <br/>

        {/* Project links */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-5">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
              GitHub
            </a>
          ) : (
            <span
              className="project-link opacity-50"
              title="Repository link will be added"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
              Repository pending
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              Live Demo
            </a>
          ) : (
            <span
              className="project-link opacity-50"
              title="Live demo will be added"
            >
              <i className="bi bi-globe" aria-hidden="true"></i>
              Demo pending
            </span>
          )}

        </div>

      </div>

    </article>
  );
};

export default ProjectCard;

