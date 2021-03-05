
import picture from "../../assets/ProfilePic.jpg";

function About() {
  return (
    <section id="about">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">About Me</h1>
        <p className="lead text-muted">I am currently enrolled in a coding bootcamp through the University of California San Diego. I also have a
          bachelor's degree in Political Science from San Diego State University. Some of my most recent work is below:</p>
          <img src={picture} className=" img-fluid img-thumbnail rounded float-end" alt="profile"></img>
      </div>
    </div>
  </section>
  )
}

export default About;