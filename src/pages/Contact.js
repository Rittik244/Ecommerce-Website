import React from "react";
import styled from "styled-components";

const Contact = () => {
  document.title = "Contact - EcomSite";

  return (
    <Wrapper>
      <h2 className="heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0651557221167!2d77.42976557477776!3d23.277082106783592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4303786f3fe3%3A0xea110abbe01f0b8f!2sDream%20designers!5e0!3m2!1sen!2sin!4v1707338850200!5m2!1sen!2sin"
        title="google amp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkglgaz"
            method="post"
            className=""
          >
            <input
              type="text"
              placeholder="Username"
              name="Username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2 {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .container {
    max-width: 50rem;
    margin: auto;

    .contact-form {
      margin-top: 5rem;
      margin-bottom: 5rem;

      form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
`;

export default Contact;
