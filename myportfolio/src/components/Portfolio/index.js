function Portfolio() {

  return (
  <section id="portfolio">
    <div className="container">
    <h1 className="fw-light">Portfolio</h1>
     <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Brewery Finder</h2>
        <p>A web app that leverages jQuery for the logic and Foundation for CSS framework to retrieve lists of breweries in an area based on a user input.</p>
        <p><a className="btn btn-secondary" href="https://github.com/dillonhoban/The_BEST_Brewery_Finder">View the code &raquo;</a></p>
        <p><a href="https://dillonhoban.github.io/The_BEST_Brewery_Finder/" className="btn btn-secondary">Visit the site &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Space Invaders</h2>
        <p>A web app utilizes express and passport to validate users with an email login. User data, including high scores are stored in a MySQL database.</p>
        <p><a className="btn btn-secondary" href="https://github.com/veryfaye/ProjectTwo">View the code &raquo;</a></p>
        <p><a href="https://project-two-pat-glenn-amanda.herokuapp.com/" className="btn btn-secondary">Visit the site &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Vulcan</h2>
        <p>A web app that connects small businesses, specifically restaurants, with service providers that specialize in restuarant work, using React. Currently in development.</p>
        <p><a className="btn btn-secondary" href="https://github.com/maninblack1974/Vulcan">View the code &raquo;</a></p>
        <p><a href="#" className="btn btn-secondary">Visit the site &raquo;</a></p>
      </div>
    </div> 
  </div>
  </section>
  )
}

export default Portfolio;