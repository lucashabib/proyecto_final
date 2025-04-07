import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import SeccionPeliculas from "./components/SeccionPeliculas.js/SeccionPeliculas";


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
      </main>


     
      

    </React.Fragment>
  );
}

export default App;
