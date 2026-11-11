
import skills from '../../data/skills';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">

          <p className="section-label mb-4">
            My technical toolkit
          </p>

          <h2 className="section-title">
            Skills & Technologies
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-muted)]">
            Here are some of the technologies and tools
            I have been learning and using through my
            development projects and practical work.
          </p>

        </div>
        <br />
        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2">

          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
