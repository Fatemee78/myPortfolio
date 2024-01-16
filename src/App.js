import './App.css'
import Experiences from './Component/Expeinces/Experiences.jsx';
import { Intro } from './Component/Intro/Intro.jsx';
import { NavBar } from "./Component/Navbar/NavBar";
import Portfolio from './Component/Portfolio/Portfolio.jsx';
import Services from './Component/Services/Services.jsx';
import Work from './Component/Work/Work.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Work/>
      <Portfolio/>
    </div>
  );
}

export default App;
