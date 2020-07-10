import React from "react";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import NoMatch from "./pages/NoMatch";
import ResponsiveDrawer from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/recipes"]}>
            <ResponsiveDrawer firstTab={<Recipes />} />
          </Route>
          <Route exact path="/recipes/:id">
            <ResponsiveDrawer />
            <RecipeDetails />
          </Route>
          <Route>
            <ResponsiveDrawer />
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
