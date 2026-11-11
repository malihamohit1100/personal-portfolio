
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/malihamohit1100',
      icon: 'bi-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/maliha-mohit-4375842b6/',
      icon: 'bi-linkedin',
    },
  ];

  return (
    <footer className="footer-custom">

      <div className="container-custom">

        <div className="grid gap-10 py-12 md:grid-cols-2 md:items-center">

          {/* Branding */}
          <div>

            <a
              href="#home"
              className="text-2xl font-extrabold text-[var(--color-primary)]"
            >
              Maliha.
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-text-muted)]">
              Building practical applications,
              learning continuously, and growing
              through every project.
            </p>

          </div>

          {/* Social links */}
          <div className="md:text-right">
            <br />
            <p className="mb-4 text-sm font-semibold">
              Connect with me
            </p>
            <br />
            <div className="flex gap-3 md:justify-end">

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="footer-social-link"
                >
                  <i
                    className={`bi ${social.icon}`}
                    aria-hidden="true"
                  ></i>
                </a>
              ))}

            </div>
            <br />
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-border)] py-6 text-center">
          <br />
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} Maliha Mohit. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            Designed and built with React & Tailwind CSS.
          </p>
          <br />
        </div>

      </div>

    </footer>
  );
};

export default Footer;
