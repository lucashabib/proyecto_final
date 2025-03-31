import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navegacion from "./components/Navegacion/Navegacion";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";

function App() {
  
  return (
    <React.Fragment>
  
      <Header/>
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
      </Switch>
      

    </React.Fragment>
  );
}

export default App;
