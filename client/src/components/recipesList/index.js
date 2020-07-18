import React from "react";
import Recipes from "../Recipes/";

export default function Results(props) {
  return (
    <>
      {props.results.map((recipe) => (
        <Recipes recipe={recipe} />
      ))}
    </>
  );
}
