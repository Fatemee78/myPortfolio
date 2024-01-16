import './App.css'
import { Intro } from './Component/Intro/Intro.jsx';
import { NavBar } from "./Component/Navbar/NavBar";
import Services from './Component/Services/Services.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
