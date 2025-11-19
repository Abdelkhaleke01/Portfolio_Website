import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home.jsx';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact.jsx';
import Projects from './Pages/Project.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
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
