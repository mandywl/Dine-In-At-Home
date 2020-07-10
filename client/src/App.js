import React from "react";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import NoMatch from "./pages/NoMatch";
import ResponsiveDrawer from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App() {
  const allTabs = ["/", "/recipes", "/tab3"];

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/recipes"]}>
            <ResponsiveDrawer firstTab={<Recipes />} />
          </Route>
          <Route exact path="/books/:id">
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
