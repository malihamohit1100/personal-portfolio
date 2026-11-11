
const About = () => {
  const profileDetails = [
    {
      label: 'Degree',
      value: 'BSc in Computer Science & Engineering',
    },
    {
      label: 'University',
      value: 'Prime University',
    },
    {
      label: 'Graduation',
      value: '2024',
    },
    {
      label: 'CGPA',
      value: '3.52 / 4.00',
    },
    {
      label: 'Location',
      value: 'Dhaka, Bangladesh',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[var(--color-surface-alt)]"
    >
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-14">
          <p className="section-label mb-4">
            Get to know me
          </p>

          <h2 className="section-title">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* About description */}
          <div>
            <h3 className="text-2xl font-bold leading-snug">
              A curious developer with a passion for learning
              and building useful things.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-muted)]">

              <p>
                I am a Computer Science and Engineering graduate
                from Prime University. My academic background
                introduced me to programming, databases,
                software engineering, data structures, and
                other core areas of computer science.
              </p>

              <p>
                I have been developing my practical skills
                through hands-on projects using Python,
                Django, JavaScript, React, and PostgreSQL.
                I enjoy working on applications that solve
                everyday problems and help me understand
                software development more deeply.
              </p>

              <p>
                My goal is to grow as a software developer,
                strengthen my technical foundation, and
                contribute to real-world projects while
                continuously learning and improving.
              </p>

            </div>
          </div>

          {/* Profile information */}
          <div>
            <div className="about-card">

              <h3 className="mb-5 text-lg font-bold">
                Education & Profile
              </h3>

              {profileDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="about-info-item flex flex-col gap-2 sm:flex-row sm:justify-between"
                >
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">
                    {detail.label}
                  </span>

                  <span className="text-sm font-semibold sm:max-w-[65%] sm:text-right">
                    {detail.value}
                  </span>
                </div>
              ))}

            </div>

            {/* Career direction */}
            <div className="mt-6 rounded-lg border border-[var(--color-border)] p-6">

              <div className="flex items-center gap-3">
                <i className="bi bi-bullseye text-2xl text-[var(--color-primary)]"></i>

                <h3 className="font-bold">
                  Career Goal
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                To build a strong career in software
                development, gain practical industry
                experience, and develop reliable,
                user-focused applications.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
