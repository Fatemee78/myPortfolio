import './App.css'
import Contact from './Component/Contact/Contact.jsx';
import Experiences from './Component/Expeinces/Experiences.jsx';
import { Intro } from './Component/Intro/Intro.jsx';
import { NavBar } from "./Component/Navbar/NavBar.jsx";
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import Services from './Component/Services/Services.jsx';
import Testimonial from './Component/Testimonials/Testimonial.jsx';
import Footer from './Component/Footer/Footer.jsx'
import { useContext } from "react";
import { themeContext } from "./Context";
import Education from './Component/Education/Education.jsx';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <NavBar/>
      <Intro/>
      <Services/>
      <Education/>
      <Experiences/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
