
import profileImage from '../../assets/images/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container-custom grid items-center gap-16 md:grid-cols-2">

        {/* Introduction */}
        <div className="order-2 md:order-1">

          <p className="section-label mb-5">
            Hello, welcome to my portfolio
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl">
            Hi, I'm{' '}
            <span className="text-[var(--color-primary)]">
              Maliha Mohit.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-[var(--color-secondary)] sm:text-2xl">
            Aspiring Software Engineer
          </h2>
          <br />
          <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-text-muted)]">
            I'm a Computer Science and Engineering graduate
            interested in building practical web applications
            and exploring modern software development.
            I enjoy learning new technologies, solving problems,
            and turning ideas into functional applications.
          </p>
          <br />
          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 sm:mt-12">

            <a
              href="/Maliha-Mohit-CV.pdf"
              download
              className="btn-primary-custom"
            >
              <i className="bi bi-download" aria-hidden="true"></i>
              Download CV
            </a>

            <a
              href="#projects"
              className="btn-outline-custom"
            >
              View Projects
              <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>

          </div>

          <br />

          {/* Social links */}
          <div className="mt-7 flex items-center gap-5 sm:mt-8">

            <span className="text-sm text-[var(--color-text-muted)]">
              Find me on
            </span>

            <a
              href="https://github.com/malihamohit1100"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-[var(--color-secondary)] transition hover:text-[var(--color-primary)]"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/maliha-mohit-4375842b6/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-[var(--color-secondary)] transition hover:text-[var(--color-primary)]"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>

          </div>
        </div>

        {/* Profile image */}
        <div className="order-1 md:order-2">
          <div className="hero-image-wrapper">

            <img
              src={profileImage}
              alt="Maliha Mohit wearing graduation attire"
              className="hero-image"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
