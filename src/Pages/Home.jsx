import { useState } from "react";

function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const goToAbout = () => {
    window.location.href = "/about"; 
  };

  return (
    <section>
      {/* Klikbare naam */}
      <h2 className="homeh2 cursor-pointer" onClick={goToAbout}>
        Abdelkhalek El Ouali
      </h2>

      {/* Software Developer netjes opgebouwd */}
      <h2 className="homeh22">
        Software <span className="homeh222">Developer</span>
      </h2>
    </section>
  );
}

export default Home;
