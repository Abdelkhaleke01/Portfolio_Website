import React from "react";

function ProjectDetails() {
  return (
    <div className="details-container">

      <h2 className="details-title">Project details</h2>

      <div className="details-text">
        <h3>Details over het project:</h3>
        <p>
            Voor me eerste project moest ik een landen project maken wat voor een goed doel en ik had met me groepje het land suriname
         <br /><br />
         Voor mijn andere project had ik met mijn groepje een escape room website gemaakt waar je puzzels moet oplossen om uiteindelijk de schat kist op het einde open te krijgen
        </p>
      </div>

      <div className="details-images-row">
        <img src="/img/zitten.jpg" alt="project preview" />
        <img src="/img/zitten.jpg" alt="project preview 2" />
      </div>

    </div>
  );
}

export default ProjectDetails;
