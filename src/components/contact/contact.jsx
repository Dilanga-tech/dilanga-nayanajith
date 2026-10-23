import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get In Touch</span>

      <div className="contact__container container">
        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">dilanganayanajith@gmail.com</span>
            <a href="mailto:dilanganayanajith@gmail.com" className="contact__button">
              Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bx-map contact__card-icon"></i>
            <h3 className="contact__card-title">Address</h3>
            <span className="contact__card-data">143/14/7 Aspokuna Village, Meegolla, Hindagolla</span>
          </div>
          
          <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>
            <h3 className="contact__card-title">WhatsApp</h3>
            <span className="contact__card-data">+94 772462583</span>
            <a
              href="https://wa.me/94772462583"
              target="_blank"
              rel="noreferrer"
              className="contact__button"
            >
              Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
