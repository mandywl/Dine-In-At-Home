const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactrecipes");

const recipeSeed = [
  {
    title: "Beef Stroganoff",
    description: "Ready in 35 minutes and serves 4 people.",
    ingrediates: [
      {
        ingredient1: "800 PATATOES",
        ingredient2: "1/4 SALT",
        ingredient3: "1/4 MILK",
        ingredient4: "2 Tbsp BUTTER",
        ingredient5: "1/2 BROWN ONION",
        ingredient6: "2 CARROTS",
        ingredient7: "1/2 punnet MUSHROOM",
        ingredient8: "600 BEEF SCHNIZEL (at room temperature)",
        ingredient9:
          "1 Tbsp STROGANOFF SPICES (1 part ground paprika, 1/2 part garlic powder, 1/2 part onion powder, 1/2 dried tarragon, 1/4 mild curry powder)",
        ingredient10: "1 cup BEEF STOCK",
        ingredient11: "150 ml CREAM",
        ingredient12: "1 Tbsp DIJON MUSTARD",
        ingredient13: "2 tsp RED WINE VINEGAR",
        ingredient14: "125 FROZEN PEAS",
      },
    ],
    thumbnail: "beefStroganoff.e6ed0188.jpg",
    method: [
      {
        first:
          "1, Bring a large pot of salted water to the boil. Dice potatoes 3cm and cook in pot of boiling water for 15-18 minutes, until very soft. Drain and return to pot with salt, milk and butter. Mash until smooth and season to taste. ",
        second:
          "2, While potatoes cook, finely dice onion; cut carrots in half and thinly slice on an angle; thinly slice mushrooms.",
      },
    ],
  },
  {
    title: "Honey Soy Chicken",
    description: "Ready in 55 minutes and serves 4 people.",
    ingrediates: [
      {
        ingredient1: "1kg CHICKEN DRUMSTICKS",
        ingredient2: "1 and half grated GINGER",
        ingredient3: "3 Tbsp HONEY",
        ingredient4: "1/4 SOY SOURCE",
        ingredient5: "2 colves minced GARLIC",
        ingredient6: "1 Tbsp WHITE WINE VINEGAR",
        ingredient7: "1 tsp SESAME OIL",
        ingredient8: "1 tsp GROUND BLACK PEPPER",
        ingredient9: "15g SESAME SEED",
        ingredient10: "2 cups JASMINE RICE",
        ingredient11: "3 cups water",
        ingredient12: "1 BROCCOLI",
        ingredient13: "1/2 punnet MUSHROOMS",
        ingredient14: "2 BABY BOK CHOY",
        ingredient15: "1 Tbsp SESAME OIL",
        ingredient16: "1 Tbsp OIL",
        ingredient17: "1 Tbsp SWEET CHILI SOURCE",
      },
    ],
    thumbnail: "honeySoyChicken.866a9607.jpg",
    method: [
      {
        first:
          "1. Prep Chicken. Preheat oven to 200 degees. Mix all chicken ingredients (1kg chicken drumsticks, 1 and half tsp grated ginger, 3 Tbsp honey, 1/4 cup soy source, 2 cloves minced garlic, 1 Tbsp white wine vinegar, 1tsp ground black pepper, 15g sesame seeds) in a large bowl and pour into a large, lined baking dish.",
      },
    ],
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
