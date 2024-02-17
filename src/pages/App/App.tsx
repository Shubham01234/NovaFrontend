import LandingPage from "pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../../../src/App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;