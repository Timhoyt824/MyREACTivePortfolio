import "./style.css";
import picture from "../../assets/ProfilePic.jpg";


function About() {
  return (
    <section id="about">

      <div className="container page-container">
        <h1 data-aos="fade-up">About me.</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 img-column" data-aos="zoom-in-right">
            <img src={picture}></img>
          </div>
          <div className="col-12 col-md-8 p-column" data-aos="fade-left">
            <p>I'm a full-stack web developer with a certificate from a coding bootcamp through the University of California San Diego. I also have a
              bachelor's degree in Political Science from San Diego State University. I create websites that are: </p>

            <div className="row justify-content-center icon-row">
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fas fa-user-tie fa-4x" aria-hidden="true"></i>
                </div>
                <h2 className="responsive">Professional</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fas fa-database fa-4x" aria-hidden="true"></i>
                </div>
                <h2 className="intuitive">Powerful</h2>
              </div>
              <div className="col-4 col-md-3">
                <div className="circle">
                  <i class="fas fa-user-friends fa-4x" aria-hidden="true"></i>
                </div>
                <h2 className="dynamic">Approachable</h2>
              </div>
            </div>

            <p>Some of my latest project are below.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;