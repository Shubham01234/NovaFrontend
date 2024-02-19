import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../../../src/App.css';
import LandingPage from "pages/LandingPage";
import Fraction from "pages/Fraction";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/fraction" element={<Fraction/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;