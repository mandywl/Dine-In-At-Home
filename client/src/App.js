import React from "react";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import ShoppingList from "./pages/ShoppingList";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResponsiveDrawer from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ResponsiveDrawer />
        <Switch>
          <Route exact path={["/", "/recipes"]}>
            <Home />
          </Route>
          <Route exact path="/recipes/:id">
            <RecipeDetails />
          </Route>
          <Route exact path="/shopping">
            <ShoppingList />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
