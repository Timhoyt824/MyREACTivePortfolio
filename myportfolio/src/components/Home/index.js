import "./style.css";

function Home() {
  return (
    <section id="home">

      <div className="container home-container">
        <h1 className="animate__animated animate__fadeIn">Hi, I'm <span className="name">Tim Hoyt,</span> a full-stack web developer.</h1>
        <a href="#about" className="animate__animated animate__fadeIn"> 
          <button className="btn btn-primary">Check out my work
          <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></button></a>
      </div>

    </section>
  )
}

export default Home;