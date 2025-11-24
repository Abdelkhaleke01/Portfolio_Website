import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Pages/Navigation.js';
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import NoPage from './Components/Pages/NoPage.js';
import Contact from './Components/Pages/Contact.js';
import Projects from './Components/Pages/Project.jsx';
import ProjectDetails from './Components/Pages/ProjectDetails.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navigation layout wrapper */}
        <Route path="/" element={<Navigation />}>

          {/* Home page */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />

          {/* Project details page */}
          <Route path="projectdetails" element={<ProjectDetails />} />

          {/* 404 fallback */}
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
