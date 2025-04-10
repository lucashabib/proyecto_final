import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";

import PeliculaCartela from "./screens/PeliculasCartelera/PeliculasCartelera";


function App() {
  
  return (
    <>
  
      <Header/>

    

      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={'/peliculasCartelera'} component={PeliculaCartela} />
        <Route path={""} component={NotFound} />
      </Switch>
 

    </>

     
  );
}

export default App;