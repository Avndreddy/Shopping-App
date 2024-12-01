// import './App.css';
// import NavBar from './Components/NavBar';
// import HeroBanner from './Components/HeroBanner';
// import Ads from './Components/Ads';
// import Products from './Components/Products';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       <HeroBanner/>
//       <Ads/>
//       <Products/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import LandingPage from './Pages/LandingPage';
import Product from './Pages/Product';

function App() {
  return (
   
      <div className="App">
        <NavBar />
        <Router>
        <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/product/:id" element={<Product />} />
        </Routes>
        </Router>
        <Footer />
      </div>
   
  );
}

export default App;
