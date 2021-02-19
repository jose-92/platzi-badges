import React from "react";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layaut from "./Layout";
import Notfaund from "../pages/Notfaund";
import BadgeEdit from "../pages/BadgeEdit";

function App() {
  return (
    <BrowserRouter>
      <Layaut>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/edit" component={BadgeEdit} />
          <Route component={Notfaund} />
        </Switch>
      </Layaut>
    </BrowserRouter>
  );
}

export default App;
