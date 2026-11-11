
import { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [successMessage, setSuccessMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setSuccessMessage(
      'Thank you for reaching out! Your form has been validated successfully.'
    );

    setErrorMessage('');

    setFormData(initialFormData);
  };

  return (
    <section
      id="contact"
      className="section-padding"
    >
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">

          <p className="section-label mb-4">
            Get in touch
          </p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="mt-5 leading-8 text-[var(--color-text-muted)]">
            Have a project idea, opportunity, or just want
            to connect? Feel free to send me a message.
            I'd be happy to hear from you.
          </p>

        </div>
        <br />
        <div className="grid gap-12 md:grid-cols-2">

          {/* Contact information */}
          <div>

            <h3 className="text-2xl font-bold">
              Let's start a conversation.
            </h3>

            <p className="mt-5 max-w-md leading-8 text-[var(--color-text-muted)]">
              I'm interested in software development
              opportunities, collaborative projects,
              and connecting with people in the
              technology community.
            </p>
            <br />

            <div className="mt-9 flex flex-col gap-8">

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:malihamohit12@gmail.com"
                    className="mt-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  >
                    malihamohit12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <p className="font-semibold">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon">
                  <i className="bi bi-linkedin"></i>
                </div>

                <div>
                  <p className="font-semibold">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/maliha-mohit-4375842b6/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="form-group mt-5">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group mt-5">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            {/* Error message */}
            {errorMessage && (
              <p
                role="alert"
                className="form-feedback form-error"
              >
                <i className="bi bi-exclamation-circle"></i>
                {errorMessage}
              </p>
            )}

            {/* Success message */}
            {successMessage && (
              <p
                role="status"
                className="form-feedback form-success"
              >
                <i className="bi bi-check-circle"></i>
                {successMessage}
              </p>
            )}
            <br />
            {/* Submit */}
            <button
              type="submit"
              className="btn-primary-custom mt-7 w-full sm:w-auto"
            >
              Send Message

              <i className="bi bi-send"></i>
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
