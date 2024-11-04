import AboutMe from "./components/AboutMe.jsx";
import Courses from "./components/Courses.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Skills from "./components/Skills.jsx";
import SoftSkills from "./components/SoftSkills.jsx";

function App() {


  return (
      <>
          <Header/>
          <ProfileCard/>
          <AboutMe/>
          <Experience/>
          <Education/>
          <Courses/>
          <Skills/>
          <SoftSkills/>
      </>
  )
}

export default App
