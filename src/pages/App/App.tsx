import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../../../src/App.css';
import LandingPage from "pages/LandingPage";
import Fraction from "pages/Fraction";
import { SignUp } from "pages/Authentication/SignUp";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/fraction" element={<Fraction/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;