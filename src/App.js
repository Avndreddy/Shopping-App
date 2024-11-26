import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HeroBanner from './Components/HeroBanner';
import Ads from './Components/Ads';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroBanner/>
      <Ads/>
      <Products/>
    </div>
  );
}

export default App;