
import { useMemo, useState } from 'react';

import projects from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => {
    const technologies = projects.flatMap(
      (project) => project.technologies
    );

    return ['All', ...new Set(technologies)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="section-padding bg-[var(--color-surface-alt)]"
    >
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">

          <p className="section-label mb-4">
            Selected work
          </p>

          <h2 className="section-title">
            Projects I've Built
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-muted)]">
            A collection of practical projects where
            I've applied my knowledge of programming,
            backend development, databases, and frontend
            technologies.
          </p>

        </div>

        {/* Filters */}
        <div className="mb-10">

          <p className="mb-4 text-sm font-semibold">
            Filter by technology
          </p>

          <div className="flex flex-wrap gap-3">

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`filter-button ${
                  activeFilter === filter
                    ? 'filter-button-active'
                    : ''
                }`}
              >
                {filter}
              </button>
            ))}

          </div>

        </div>

        {/* Project count */}
        <div className="mb-6 flex items-center justify-between">

          <p className="text-sm text-[var(--color-text-muted)]">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>

          {activeFilter !== 'All' && (
            <button
              type="button"
              onClick={() => setActiveFilter('All')}
              className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              Clear filter
            </button>
          )}

        </div>

        {/* Project cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2">

            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>
        ) : (
          <p className="py-12 text-center text-[var(--color-text-muted)]">
            No projects found for this technology.
          </p>
        )}

      </div>
    </section>
  );
};

export default Projects;
