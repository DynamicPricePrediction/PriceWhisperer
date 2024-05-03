import React from "react";
import AppHeader from "./AppHeader";
import Home from "./Home"
import AppFooter from "./AppFooter";
import ProductsListing from "./ProductsListing";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
      <div>

          <Router>
              <AppHeader/>

              <Routes>
                  <Route exact path={"/productsList/:id"} element={<ProductsListing/>}/>
                  <Route exact path={"/"} element={<Home/>}/>
              </Routes>

              <AppFooter/>
          </Router>

      </div>
  );
}

export default App;
