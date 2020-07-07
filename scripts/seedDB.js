const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const recipeSeed = [
  {
    title: "Beef Stroganoff",
    description: "Ready in 35 minutes and serves 4 people.",
    ingredient1: "800 potatoes",
    ingredient2: "1/4 salt",
    ingredient3: "1/4 milk",
    ingredient4: "2 Tbsp butter",
    ingredient5: "1/2 brown onion",
    ingredient6: "2 carrots",
    ingredient7: "1/2 punnet mushrooms",
    ingredient8: "600 beef schnizel (at zoom temperature)",
    ingredient9:
      "1 Tbsp Stroganoff spices (1 part ground paprika, 1/2 part garlic powder, 1/2 part onion powder, 1/2 dried tarragon, 1/4 mild curry powder",
    ingredient10: "1 cup beef stock",
    ingredient11: "150 ml cream",
    ingredient12: "1 Tbsp Dijon mustard",
    ingredient13: "2 tsp red wine vinegar",
    ingredient14: "125 frozen peas",
    thumbnail: "beefStroganoff.jpg",
    method:
      "1, Bring a large pot of salted water to the boil. Dice potatoes 3cm and cook in pot of boiling water for 15-18 minutes, until very soft. Drain and return to pot with salt, milk and butter. Mash until smooth and season to taste. </br> 2, While potatoes cook, finely dice onion; cut carrots in half and thinly slice on an angle; thinly slice mushrooms.",
  },
  {
    title: "Honey Soy Chicken",
    description: "Ready in 55 minutes and serves 4 people.",
    ingredient1: "1kg chicken drumsticks",
    ingredient2: "1 and half grated ginger",
    ingredient3: "3 Tbsp honey",
    ingredient4: "1/4 soy source",
    ingredient5: "2 colves minced garlic",
    ingredient6: "1 Tbsp white wine vinegar",
    ingredient7: "1 tsp sesame oil",
    ingredient8: "1 tsp ground black pepper",
    ingredient9: "15g sesame seeds",
    ingredient10: "2 cups jasmine rice",
    ingredient11: "3 cups water",
    ingredient12: "1 broccoli",
    ingredient13: "1/2 punnet mushrooms",
    ingredient14: "2 baby bok choy",
    ingredient15: "1 Tbsp sesame oil",
    ingredient16: "1 Tbsp oil",
    ingredient17: "1 Tbsp sweet chili sauce",
    thumbnail: "",
    method:
      "1. Prep Chicken. Preheat oven to 200 degees. Mix all chicken ingredients (1kg chicken drumsticks, 1 and half tsp grated ginger, 3 Tbsp honey, 1/4 cup soy source, 2 cloves minced garlic, 1 Tbsp white wine vinegar, 1tsp ground black pepper, 15g sesame seeds) in a large bowl and pour into a large, lined baking dish.",
  },
];

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
