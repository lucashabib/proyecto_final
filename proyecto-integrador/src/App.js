import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import PeliTodas from "./screens/PeliTodas/PeliTodas";

import PeliculaCartela from "./screens/PeliculasCartelera/PeliculasCartelera";
import PelisValoradasCartelera from "./screens/PelisValoradasCartelera/PelisValoradasCartelera";
import DetallePelisValoradas from "./screens/DetallePelisValoradas/DetallePelisValoradas";
import DetallePelisCartelera from "./screens/DetallePelisCartelera/DetallePelisCartelera";


function App() {
  
  return (
    <>
  
      <Header/>

    

      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={'/peliculasCartelera'} component={PeliculaCartela} />
        <Route path={'/pelisValoradasCartelera'} component={PelisValoradasCartelera} />
        <Route path={'/detallePelisValoradas/:id'} component={DetallePelisValoradas} />
        <Route path={'/detallePelisCartelera/:id'} component={DetallePelisCartelera} />
        <Route path={'/PeliTodas'} component={PeliTodas} />
        <Route path={""} component={NotFound} />
      </Switch>
 

    </>

     
  );
}

export default App;