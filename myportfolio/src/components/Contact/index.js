
function Contact() {

  return (
    <section id="contact">

      <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Contact me.</h1>
        <p className="lead text-muted">Always in search of career opportunities and/or collaborations. <br />
          I can work independently or with any size team. </p>

        <div className="row justify-content-center contact-row">
          <div className="col-12 col-md-3">
            <a href="mailto:timhoyt824@gmail.com">
              <i className="fas fa-at fa-2x social-link" aria-hidden="true"></i></a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://github.com/timhoyt824">
              <i className="fab fa-github fa-2x social-link" aria-hidden="true"></i></a>
          </div>
          <div className="col-12 col-md-3">
            <a href="https://www.linkedin.com/in/timhoyt824/">
              <i className="fab fa-linkedin fa-2x social-link" aria-hidden="true"></i></a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;