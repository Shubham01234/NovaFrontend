import LandingPage from "pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../../../src/App.css';
import { SignUp } from "pages/Authentication/SignUp";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;