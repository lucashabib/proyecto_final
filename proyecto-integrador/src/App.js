import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import SeccionPeliculas from "./components/SeccionPeliculas.js/SeccionPeliculas";
import SeccionPelisValoradas from "./components/SeccionPelisValoradas.js/SeccionPelisValoradas";

function App() {
  
  return (
    <React.Fragment>
  
      <Header/>

      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={""} component={NotFound} />
      </Switch>

      <main>
        <SeccionPeliculas/>
        <SeccionPelisValoradas/>
      </main>

     <Footer/>
    </React.Fragment>
  );
}

export default App;