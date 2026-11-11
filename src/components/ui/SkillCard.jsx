
const SkillCard = ({ skill }) => {
  return (
    <article className="skill-card group">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-surface-alt)] text-xl text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white">
          <i
            className={`bi ${skill.icon}`}
            aria-hidden="true"
          ></i>
        </div>

        <div>
          <h3 className="font-bold text-[var(--color-text)]">
            {skill.category}
          </h3>

          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            {skill.items.length} technologies
          </p>
        </div>

      </div>

      <p className="mb-5 text-sm leading-6 text-[var(--color-text-muted)]">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="skill-badge"
          >
            {item}
          </span>
        ))}
      </div>

    </article>
  );
};

export default SkillCard;
