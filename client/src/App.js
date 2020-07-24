import React, { useState, useEffect, useContext } from "react";
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
import { UserContext } from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const [, setUserState] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const handleOnClickFavorite = () => {
    console.log("HIiiiiiiii");
    window.location.replace("/favorites");
  };

  const handleOnClickShopping = () => {
    console.log("HIiiiiiiii");
    window.location.replace("/shopping");
  };

  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        setUserState({
          authenticated: true,
          name: res.data.name,
          email: res.data.email,
          id: res.data._id,
        });
      })
      .catch((err) => console.log(err))
      .then((res) => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Router>
        <div>
          <ResponsiveDrawer
            onClickFavorite={handleOnClickFavorite}
            onClickShopping={handleOnClickShopping}
          />
          <Switch>
            <Route exact path={["/", "/recipes"]} component={Home} />
            <Route exact path="/recipes/:id">
              <RecipeDetails />
            </Route>
            <Route exact path="/favorites" component={Login} />
            <Route exact path="/shopping" component={Login} />
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div>
        <ResponsiveDrawer
          onClickFavorite={handleOnClickFavorite}
          onClickShopping={handleOnClickShopping}
        />
        <Switch>
          <Route exact path={["/", "/recipes"]} component={Home} />
          <Route exact path="/recipes/:id">
            <RecipeDetails />
          </Route>
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/shopping" component={ShoppingList} />
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
