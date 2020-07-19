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
  {
    title: "Beef 'N' Cheese Pie",
    description: "Ready in 50 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "400g KUMARA",
        ingredient2: "400g POTATOES",
        ingredient3: "2 Tbsp BUTTER",
        ingredient4: "1/4 cup MILK",
        ingredient5: "1 1/4 cup grated CHEESE",
        ingredient6: "1/2 brown ONION",
        ingredient7: "2 CARROTS",
        ingredient8: "1/2 tsp salt",
        ingredient9: "600g BEEF MINCE",
        ingredient10: "1 clove minced GARLIC",
        ingredient11:
          "1 1/2 tsp PIE HERDS (1 part garlic powder, 1/2 part onion powder, 1 part dried Italian herbs)",
        ingredient12: "2 Tbsp FLOUR",
        ingredient13: "1 1/2 cups BEEF STOCK",
        ingredient14: "1 Tbsp WORCESTERSHIRE SAUCE",
        ingredient15: "1 1/2 tsp SOY SAUCE",
        ingredient16: "2 Tbsp TOMATO SAUCE",
        ingredient17: "1 BROCCOLI",
        ingredient18: "125g FROZEN PEAS",
        ingredient19: "1 Tbsp BUTTER",
      },
    ],
    thumbnail: "honeySoyChicken.866a9607.jpg",
    method: [
      {
        first:
          "1. Preheat over to high grill. Set aside a mediun baking dish. Bring two medium pots of salted water to the boil. Dice kumamra and potatoes 2cm. 2. Cook kumara and potatoes in first pot of boiling water for 15-20 minutes, until sorf. Drain and mash with first measure of butter and milk. season to taste and set aside. 3. While kumara and potatoes are cooking, finely dice onion and dice carrots 1cm. Heat a little oil in a medium fry-pan on high heat. 4. Cook onion, carrots and salt for 3 minutes, until starting to brown. Add beef and garlic and cook for about 7 minutes, breaking mince up as it cooks, until browned. 5. Reduce heat to medium, add pie herbs and flour and cook a further 1 minute, stirring until fragrant. Add stock, Worcestershire sauce, soy sauce and tomato sauce. Bring to a simmer and cook for about 3 minutes =, until thickended. Season to taste. Transfer to reserved dish. Spoon mash on top of mince, spreading out to cover. sprinkle over cheese and grill on middle upper oven rack for 5-7 minutes, until cheese is golden. Cheesy Goodness. 7. While pie is grilling, cut broccoli into small florets. Add to second pot of boiling water along with peas and cook about 4 minutes, until bright green and tender. Drain and return to pot with second measure of butter. toss to combine and season to taste. 8. To serve, divid pie between plates and serve greens on the side. Serve with tomato sauce. ",
      },
    ],
  },
  {
    title: "Chicken Tacos",
    description: "Ready in 30 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "10 TORTILLAS",
        ingredient2: "550g CHICKEN BREAST",
        ingredient3:
          "1 Tbsp TACO SPICE ( 1 part garlic powder, 1 part smoked paprika, 1/2 part dried coriander, 1 part ground cumin, 1/2 part coriander, 1/4 part black pepper)",
        ingredient4: "400g KIDNEY BEANS",
        ingredient5: "1 clove minced GARLIC",
        ingredient6: "1/4 TSP salt",
        ingredient7: "1/4 cup water",
        ingredient8: "1 tsp OLIVE OIL",
        ingredient9: "1 BAG RANCHSLAW",
        ingredient10: "1 Tbsp CHIPOTLE SAUCE",
        ingredient11: "2 Tbsp SOUR CREAM",
        ingredient12: "2 Tbsp MAYO",
        ingredient13: "2 tsp RED WINE VINEGAR",
      },
    ],
    thumbnail: "honeySoyChicken.866a9607.jpg",
    method: [
      {
        first:
          "1. Prep Tacos. PREHEAT OVEN TO 200C. Wrap torillas in fiol and place in oven to warm for about 20 minutes, until warmed through. Keep wrapped in foil unitl ready to serve. 2. Cook Bean Smash. Rinse and drain kidney beans and place all bean smash ingredients in pot on low heat. bring to a simmer and cook for 3-4 minutes, until warmed through. Addoil and mash until smooth. Season to taste and cover to keep warn. 3. Prep Salad and Chicken. add ranchslaw to a blow with chipotle, first measure of sour cream, mayo and vinegar. Mix to combine, season to taste and set aside. Rub chicken with first measure of taco spice and season with salt. 4. Cook Chicken. Heat a little oil in a large fry-pan on high heat and cook chicken of 4 minutes each side (depending on thickness) until cooked through. Rest, covered on plate for 3 minutes. Thinly slice and toss back through resting juices.",
      },
    ],
  },
  {
    title: "Crispy Japanese Chicken",
    description: "Ready in 30 minutes and serves 4 people",
    ingrediates: [
      {
        ingredient1: "2 cups JASMINE RICE",
        ingredient2: "3 cups water",
        ingredient3: "1/4 tsp salt",
        ingredient4: "650g CHICKEN THIGHS",
        ingredient5: "1 pack CHICKEN FLOUR",
        ingredient6: "1/4 tsp salt",
        ingredient7: "1/4 CABBAGE",
        ingredient8: "2 SPRING ONOINS",
        ingredient9: "2 CARROTS",
        ingredient10: "1 COURGETTE",
        ingredient11: "3 Tbsp MAYO",
        ingredient12: "2 tsp SESAME OIL",
        ingredient13: "1 1/2 tsp SOY SAUCE",
        ingredient14: "15g SESAME SEEDS",
        ingredient15: "50g CRISPY NOODLES",
      },
    ],
    thumbnail: "honeySoyChicken.866a9607.jpg",
    method: [
      {
        first:
          "1. Combine rice, water and salt in a medium pot and bring to the boil. As soon as it boils, cover with a lid and reduce to lowest heat to cook for 12 minutes. turn off heat and leave to steam, still covered, for a further 8 minutes. Do not lift lid during cooking. 2. Pat Chicken dry and dice 3cm, add to bowl along with chicken flour and salt. Toss well to combine. Heat a little oil in a large fry-pan on high heat. 3. Shake off excess flour and cook chicken, in two batches, for 5-6 minutes, until cooked through and golden. Turn occasionally to cook on all sides. Wipe pan clean between batches and add a little more oil as needed. Set aside an paer towels and season with salt. 4. Thinly slice cabbage until you have 3 cups worth; thinly slice spring onions; grate carrots and courgette. Add all to a large bowl and set aside. 5. When chicken is cooked add all remaininh slaw ingredients to the bowl, mix to combine and season to taste. 6. In a small bowl, combine second measure of mayo and semame oil. 7. to serve, spoon rice onto plates, top with crispy chicken and serve slaw on the side. Dollop with mayo mix. ",
      },
    ],
  },
  {
    title: "BBQ Pork Ramen",
    description: "Ready in 35 minutes and serves 4 people",
    ingrediates: [
      {
        ingredient1: "4 EGGS",
        ingredient2: "280g EGG NOODLES",
        ingredient3: "500g PORK RUMP STEAKS",
        ingredient4: "1 tsp HONEY",
        ingredient5: "2 Tbsp SOY SAUCE",
        ingredient6: "1 clove minced GARLIC",
        ingredient7: "1 tsp grated GINGER",
        ingredient8: "1/4 tsp salt",
        ingredient9: "2 tsp OLIVE OIL",
        ingredient10: "2 CARROTS",
        ingredient11: "1 BABY BOK CHOY",
        ingredient12: "125g FROZEN CORN",
        ingredient13:
          "1 part BROTH SPICES (1 part onion powder, 1 part garlic powder, 1 part ground ginger, 1 part black pepper)",
        ingredient12: "2 cups water",
        ingredient12: "1 cup CHICKEN STOCK",
        ingredient12: "2 Tbsp SOY SAUCE",
      },
    ],
    thumbnail: "honeySoyChicken.866a9607.jpg",
    method: [
      {
        first:
          "1. Cook Eggs, Bring a small pot of water and a large pot of salted water to the boil, gently add eggs to the small pot. Cook for 10 minutes hard-boiled. Drain and refresh under cold water. 2. Prep and cook pork. Pat dry, add to a medium bowl and mix with all remaining pork ingredientts. Heat a little oil in a large, deep fry-pan on medium heat. lift pork out of marinade and cook for 3 minutes each side. until cooked through. Set aside, covered to rest. 3. Prep Veggies. Cut carrots in half lengthways then thinly slice. Thinly slice bok choy. 4. Cook Broth. retune same pan to medium -high heat with a little more oil and cook carrots for about 3 minutes, until softened. Add corn and cook a further 2 minutes, until fragrant. Add Broth spices, water, stock and soy sause. Bring to a simmer and remove from heat.Stir in bok choy and season to taste with soy sauce. 5. Cook Noodles. Cook noodles in larfe pot of boiling water for about 5 minutes, stirring to separate noodles, until tender. drrain and return to pot with a little oil, to prevent sticking. Cover and set aside. Finish Eggs and pork. Peel aggs and cut in half. Thinly slice pork and add any resting juices to the broth. 7. To serve. Dived noodles between bowls, ladle over broth and veggies, then top with pork and eggs.     ",
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
