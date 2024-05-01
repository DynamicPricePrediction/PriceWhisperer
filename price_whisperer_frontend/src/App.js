import React from "react";
import AppHeader from "./AppHeader";
import Home from "./Home"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
      <Router>
          <AppHeader/>
          <Home/>
          <Routes>
              {/*<Route exact path={"/predict"} element={<Predictpage/>}/>*/}
              {/*<Route exact path={"/"} element={<Home/>}/>*/}
          </Routes>
      </Router>
  );
}

export default App;
