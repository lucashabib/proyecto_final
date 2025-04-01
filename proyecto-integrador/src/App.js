import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  
  return (
    <React.Fragment>
  
      <Header/>
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={""} component={NotFound} />
      </Switch>
      

    </React.Fragment>
  );
}

export default App;
