import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container my-5 text-center">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us anytime.</p>
      <form className="mx-auto" style={{ maxWidth: "400px" }}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Your Email"
        />
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="Your Message"
        ></textarea>
        <button className="btn btn-primary w-100">Send</button>
      </form>
    </section>
  );
};

export default Contact;
