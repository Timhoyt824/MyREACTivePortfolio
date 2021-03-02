import React, { useState, useEffect } from "react";
import "./style.css";
import Item from "./Item";
import AOS from "aos";

function Portfolio() {

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(PortfolioItems);
    AOS.init();
    AOS.refresh();
  }, []);

  const PortfolioItems = [
    {
      id: 1,
      name: "Brewery Finder",
      image: "https://via.placeholder.com/150/",
      tech: "jQuery / Foundation",
      link: "https://dillonhoban.github.io/The_BEST_Brewery_Finder/",
      github: "https://github.com/dillonhoban/The_BEST_Brewery_Finder"
    },
    {
      id: 2,
      name: "Space Invaders",
      image: "https://via.placeholder.com/150/",
      tech: "Express / Passport",
      link: "https://project-two-pat-glenn-amanda.herokuapp.com/",
      github: "https://github.com/veryfaye/ProjectTwo"
    },
    {
      id: 3,
      name: "Vulcan",
      image: "https://via.placeholder.com/150/",
      tech: "React.js / MySQL",
      link: "",
      github: "https://github.com/maninblack1974/Vulcan"
    }
  ]

  return (
    <section id="portfolio">

      <div className="container page-container portfolio-container">
        <h1 data-aos="fade-up">My portfolio.</h1>
        <div className="row">

          {state.map(item => (
            <Item
              name={item.name}
              tech={item.tech}
              image={item.image}
              link={item.link}
              github={item.github}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio;