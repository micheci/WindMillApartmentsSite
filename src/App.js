import Navbar from './navbar/Navbar';
import './App.css';
import Welcome from './Welcome/Welcome';
import Promo from './Promo/Promo';
import Map from "./Map"
import Contact from './Contact/Contact';




function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <Navbar/>
      <Welcome/>
      <Promo/>
      <Map/>
      <Contact/>

    </div>
  );
}

export default App;
