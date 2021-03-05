import Pdf from "../../assets/tim_hoyt_resume.pdf";

function Navbar() {
  return (
    <nav className="navbar bg-light navbar-expand-lg">

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <a href="https://github.com/Timhoyt824"><i class="fab fa-github fa-lg" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/timhoyt824/"><i class="fab fa-linkedin fa-lg" aria-hidden="true"></i></a>
      <a href= {Pdf} target="tim_hoyt_resume.pdf"><i class="far fa-file-alt fa-lg" aria-hidden="true"></i></a>
      <a href="mailto:best.timhoyt824@gmail.com"><i class="fas fa-at fa-lg" aria-hidden="true"></i></a>

    </nav>
  )
}

export default Navbar;