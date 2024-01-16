import './App.css'
import Experiences from './Component/Expeinces/Experiences.jsx';
import { Intro } from './Component/Intro/Intro.jsx';
import { NavBar } from "./Component/Navbar/NavBar";
import Services from './Component/Services/Services.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experiences/>
    </div>
  );
}

export default App;
