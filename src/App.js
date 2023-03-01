import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPageScreen/LandingPage";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path={"/"} element={<LandingPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
