import React, { useEffect } from "react";
import AOS from "aos";

function Contact() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="contact">

      <div className="container page-container">
        <h1 data-aos="fade-up">Contact me.</h1>
        <p>Always in search of career opportunities and/or collaborations. <br />
          I can work independently or with any size team. </p>

        <div className="row justify-content-center contact-row">
          <div className="col-12">
            <a href="mailto:timhoyt824@gmail.com">
              <i className="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i>Email: timhoyt824@gmail.com</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://github.com/timhoyt824">
              <i className="fa fa-github fa-2x social-link" aria-hidden="true"></i>Github: timhoyt824</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="www.linkedin.com/in/timhoyt824">
              <i className="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i>Linkedin: timhoyt824</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact;