import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialImpact from "./Pages/SocialImpact";
import About from "./Pages/About";
import Invest from "./Pages/Invest";
import Header from './Views/Header';

// Defining routes and their components and rendering 
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/social-impact" element={<SocialImpact />} />  
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;