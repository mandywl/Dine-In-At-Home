import React from "react";
import Recipes from "./pages/Recipes";
import ResponsiveDrawer from "./components/Nav";

function App() {
  return (
    <div>
      <ResponsiveDrawer firstTab={<Recipes />} />
    </div>
  );
}

export default App;
