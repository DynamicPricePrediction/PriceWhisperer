import React, {useState, useEffect} from "react";
import AppHeader from "./AppHeader";
import Home from "./Home"
import AppFooter from "./AppFooter";
import ProductsListing from "./ProductsListing";
import Login from "./Login";
import Signup from "./SignUp";
import LoginRedirect from "./LoginRedirect";
import UserContext from "./UserContext";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
    const [user, setUser] = useState(localStorage.getItem('user'));

    useEffect(() => {
        if (user != null) {

            localStorage.setItem('user', user);
        }
    }, [user]);

  return (
      <UserContext.Provider value={{user, setUser}}>
          <div>

              <Router>
                  <AppHeader/>

                  <Routes>
                      <Route exact path={"/productsList/:id"} element={<ProductsListing/>}/>
                      <Route exact path={"/"} element={<Home/>}/>
                      <Route exact path={"/login"} element={<Login/>}/>
                      <Route exact path={"/signup"} element={<Signup/>}/>
                      <Route exact path={"/loginRedirect"} element={<LoginRedirect/>}/>
                      <Route exact path={"/appHeader"} element={<AppHeader/>}/>
                  </Routes>

                  <AppFooter/>
              </Router>

          </div>
      </UserContext.Provider>
  );
}

export default App;
