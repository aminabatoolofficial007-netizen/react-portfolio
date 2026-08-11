import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/aminabatoolofficial007@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <span>Get In Touch</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <h3>Let's Work Together</h3>

            <p>
              Have a project in mind or want to discuss an opportunity?
              Feel free to get in touch with me. I would love to hear
              from you.
            </p>

            <div className="contact-feature">
              <i className="fas fa-envelope"></i>

              <div>
                <h4>Email</h4>
                <p>aminabatoolofficial007@gmail.com</p>
              </div>
            </div>

            <div className="contact-feature">
              <i className="fas fa-phone"></i>

              <div>
                <h4>Phone</h4>
                <p>+92 3244427980</p>
              </div>
            </div>

            <div className="contact-feature">
              <i className="fas fa-map-marker-alt"></i>

              <div>
                <h4>Location</h4>
                <p>Pakistan</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">

            <form onSubmit={handleSubmit}>

              {/* FORMSUBMIT SETTINGS */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* NAME */}
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* SUBJECT */}
              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="btn-primary"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    &nbsp; Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    &nbsp; Send Message
                  </>
                )}
              </button>

            </form>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <div className="form-message success-message">

                <i className="fas fa-check-circle"></i>

                <div>
                  <h4>Message Sent Successfully! 🎉</h4>

                  <p>
                    Thank you for reaching out! Your message has been
                    received successfully. I’ll get back to you as soon
                    as possible.
                  </p>
                </div>

              </div>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <div className="form-message error-message">

                <i className="fas fa-exclamation-circle"></i>

                <div>
                  <h4>Something Went Wrong</h4>

                  <p>
                    Your message could not be sent. Please try again
                    or contact me directly via email.
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;