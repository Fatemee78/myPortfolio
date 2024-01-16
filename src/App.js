import './App.css'
import { Intro } from './Component/Intro/Intro.jsx';
import { NavBar } from "./Component/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
    </div>
  );
}

export default App;
