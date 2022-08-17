import "./App.css";
import Nav from "./pages/nav/Nav";
import About from "./pages/about/About"
import Work from "./pages/work/Work"
import Resume from "./pages/resume/Resume"
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";

// import { Routes } from "react-router-dom";

function App() {
  return (
    <body>
      <Nav/>
        <Routes>
           <Route path="/" element={<About />} />
           <Route  path="/work" element={<Work/>}/>
           <Route path="/resume" element={<Resume/>} />
           <Route path="/contact" element={<Contact/>} />
           
        </Routes>
    </body>
  );
}

export default App;
