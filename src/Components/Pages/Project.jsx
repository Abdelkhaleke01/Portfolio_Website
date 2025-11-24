import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-container">

      <h2 className="projects-title">Projecten</h2>

      <div className="projects-wrapper">
        
        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>Project 1</h3>
          <img 
            src="/img/project2.jpg" 
            alt="project 1" 
            className="project-image" 
          />
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>Project 2</h3>
          <img 
            src="/img/project1.jpg" 
            alt="project 2" 
            className="project-image" 
          />
        </div>

      </div>

      {/* BUTTON THAT GOES TO DETAILS PAGE */}
      <Link to="/projectdetails" className="projects-button">
        Alle projecten
      </Link>

    </div>
  );
}

export default Projects;
