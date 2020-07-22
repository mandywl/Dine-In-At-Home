import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import ShoppingList from "./pages/ShoppingList";
import Favorites from "./pages/Favorites";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResponsiveDrawer from "./components/Nav";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./protectedRoute";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (
    <UserProvider>
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
            <ProtectedRoute exact path="/favorites" component={Favorites} />
            <ProtectedRoute exact path="/shopping" component={ShoppingList} />
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
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
