import Pdf from "../../assets/tim_hoyt_resume.pdf";

function Footer() {
  return (
    <footer>

      <a href="#home"><i class="fa fa-angle-double-up fa-2x back-to-top" aria-hidden="true"></i><br /></a>

      <br />

      <a href="https://github.com/Timhoyt824"><i className="fa fa-github fa-2x social-link" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/timothy-hoyt-5b84881b/"><i className="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i></a>
      <a href= {Pdf} target="tim_hoyt_resume.pdf"><i className="fa fa-file-text-o fa-2x social-link" aria-hidden="true"></i></a>
      <a href="mailto:timhoyt824@gmail.com"><i className="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i></a>
      <p>Tim Hoyt © 2020</p>

    </footer>
  )
}

export default Footer;