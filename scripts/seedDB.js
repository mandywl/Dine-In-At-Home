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
        third:
          "3, Heat a little oil in a large fry-pan on high heat. Pat beef dry and cut any larger pieces in half.",
        forth:
          "4, Add beef to pan and cook, in batches, for about 1 minute each side, until browned. Set aside, covered to rest. Wipe pan clean between batches and add a little more oil, if needed and allow the pan to come back up to high heat.",
        fifth:
          "5, Return pan to heat with a little more oil. Cook onion, carrots and mushrooms for about 5 minutes, until browned.",
        sixth:
          "6, Reduce heat to medium-high, add Strogaoff spices and cook a further 1 minute, stirring, until fragrant. Add stock, cream, mustard, vinegar and peas, bring to a simmer and cook for about 3 minutes, until sauce is thickened and veggies are tender.",
        seventh:
          "7, While sauce is simmering, slice beef 1cm. When sauce is thickened, discard beef resting juices and add beef to pan and cook a further 1 minute, until beef is warmed through. Season to taste.",
        eighth:
          "8, To serve, spoon mash onto plates and top with beef Stroganoff.",
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
        second:
          "2, Cook Chicken. Spread chicken out in a single layer and bake in oven for 20 minutes. Remove and turn to coat in glaze. Bake for a further 20-25 minutes, until chicken is cooked through and glaze is sticky.",
        third:
          "3, Cook Rice. Combine rice, water and a pinch of salt in a pot and bring to boil. Once boiling, cover with a lid and reduce to lowest heat to cook for 12 minutes. Turn off the heat and steam, covered, for 8 more minutes. Do not lift lid during cooking.",
        forth:
          "4, Prep stir-fry. Cut broccoli into small florets, thinly slice mushrooms and bok choy.",
        fifth:
          "5, Cook stir-fry. When chicken has 7 minutes remaining, heat sesame oil in a large fry-pan on medium-high heat. Cook broccoli and mushrooms for about 4 minutes, until tender. Add bok choy and cook for a further 1 minute, until bright green and tender. Remove from heat, season and stir through sweet chili sauce.",
        sixth:
          "6, To serve. Place 3/4 cup cooked rice onto plates and top with chicken and any leftover glaze from baking dish. Serve stir-fry on the side",
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
    thumbnail: "beefNCheesePie.b542cc08.jpg",
    method: [
      {
        first:
          "1. Preheat over to high grill. Set aside a mediun baking dish. Bring two medium pots of salted water to the boil. Dice kumamra and potatoes 2cm.",
        second:
          "2. Cook kumara and potatoes in first pot of boiling water for 15-20 minutes, until sorf. Drain and mash with first measure of butter and milk. season to taste and set aside.",
        third:
          "3. While kumara and potatoes are cooking, finely dice onion and dice carrots 1cm. Heat a little oil in a medium fry-pan on high heat.",
        fourth:
          "4. Cook onion, carrots and salt for 3 minutes, until starting to brown. Add beef and garlic and cook for about 7 minutes, breaking mince up as it cooks, until browned.",
        fifth:
          "5. Reduce heat to medium, add pie herbs and flour and cook a further 1 minute, stirring until fragrant. Add stock, Worcestershire sauce, soy sauce and tomato sauce. Bring to a simmer and cook for about 3 minutes =, until thickended. Season to taste.",
        sixth:
          "6. Transfer to reserved dish. Spoon mash on top of mince, spreading out to cover. sprinkle over cheese and grill on middle upper oven rack for 5-7 minutes, until cheese is golden. Cheesy Goodness.",
        seventh:
          "7. While pie is grilling, cut broccoli into small florets. Add to second pot of boiling water along with peas and cook about 4 minutes, until bright green and tender. Drain and return to pot with second measure of butter. toss to combine and season to taste.",
        eighth:
          "8. To serve, divid pie between plates and serve greens on the side. Serve with tomato sauce. ",
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
    thumbnail: "chickenTaco.3549bba3.jpg",
    method: [
      {
        first:
          "1. Prep Tacos. PREHEAT OVEN TO 200C. Wrap torillas in fiol and place in oven to warm for about 20 minutes, until warmed through. Keep wrapped in foil unitl ready to serve.",
        second:
          "2. Cook Bean Smash. Rinse and drain kidney beans and place all bean smash ingredients in pot on low heat. bring to a simmer and cook for 3-4 minutes, until warmed through. Addoil and mash until smooth. Season to taste and cover to keep warn.",
        thrid:
          "3. Prep Salad and Chicken. add ranchslaw to a blow with chipotle, first measure of sour cream, mayo and vinegar. Mix to combine, season to taste and set aside. Rub chicken with first measure of taco spice and season with salt. ",
        fourth:
          "4. Cook Chicken. Heat a little oil in a large fry-pan on high heat and cook chicken of 4 minutes each side (depending on thickness) until cooked through. Rest, covered on plate for 3 minutes. Thinly slice and toss back through resting juices.",
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
    thumbnail: "crispyJapaneseChicken.85154b84.jpg",
    method: [
      {
        first:
          "1. Combine rice, water and salt in a medium pot and bring to the boil. As soon as it boils, cover with a lid and reduce to lowest heat to cook for 12 minutes. turn off heat and leave to steam, still covered, for a further 8 minutes. Do not lift lid during cooking.",
        second:
          "2. Pat Chicken dry and dice 3cm, add to bowl along with chicken flour and salt. Toss well to combine. Heat a little oil in a large fry-pan on high heat.",
        third:
          "3. Shake off excess flour and cook chicken, in two batches, for 5-6 minutes, until cooked through and golden. Turn occasionally to cook on all sides. Wipe pan clean between batches and add a little more oil as needed. Set aside an paer towels and season with salt.",
        fourth:
          "4. Thinly slice cabbage until you have 3 cups worth; thinly slice spring onions; grate carrots and courgette. Add all to a large bowl and set aside.",
        fifth:
          "5. When chicken is cooked add all remaininh slaw ingredients to the bowl, mix to combine and season to taste.",
        sixth:
          "6. In a small bowl, combine second measure of mayo and semame oil. 7. to serve, spoon rice onto plates, top with crispy chicken and serve slaw on the side. Dollop with mayo mix.",
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
    thumbnail: "bbqPorkRamen.def318d5.jpg",
    method: [
      {
        first:
          "1. Cook Eggs, Bring a small pot of water and a large pot of salted water to the boil, gently add eggs to the small pot. Cook for 10 minutes hard-boiled. Drain and refresh under cold water.",
        second:
          "2. Prep and cook pork. Pat dry, add to a medium bowl and mix with all remaining pork ingredientts. Heat a little oil in a large, deep fry-pan on medium heat. lift pork out of marinade and cook for 3 minutes each side. until cooked through. Set aside, covered to rest.",
        thrid:
          "3. Prep Veggies. Cut carrots in half lengthways then thinly slice. Thinly slice bok choy.",
        fourth:
          "4. Cook Broth. retune same pan to medium -high heat with a little more oil and cook carrots for about 3 minutes, until softened. Add corn and cook a further 2 minutes, until fragrant. Add Broth spices, water, stock and soy sause. Bring to a simmer and remove from heat.Stir in bok choy and season to taste with soy sauce.",
        fifth:
          "5. Cook Noodles. Cook noodles in larfe pot of boiling water for about 5 minutes, stirring to separate noodles, until tender. drain and return to pot with a little oil, to prevent sticking. ",
        sixth:
          "6. Cover and set aside. Finish Eggs and pork. Peel aggs and cut in half. Thinly slice pork and add any resting juices to the broth.",
        seventh:
          "7. To serve. Dived noodles between bowls, ladle over broth and veggies, then top with pork and eggs.",
      },
    ],
  },
  {
    title: "Thai Green Fish Curry",
    description: "Ready in 30 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "2 cups JASMINE RICE",
        ingredient2: "3 cups water",
        ingredient3: "1 BABY BOK CHOY",
        ingredient4: "1/2 BROWN ONION",
        ingredient5: "1 BROCCOLI",
        ingredient6: "2 CARROTS",
        ingredient7: "600g FISH FILLETS",
        ingredient8: "40g THAI GREEN CURRY PASTE",
        ingredient9: "pinch of CHILL FLAKES",
        ingredient10: "1/2 cup CHICKEN STOCK",
        ingredient11: "425ml COCONUT MILK",
        ingredient12: "1 Tbsp SOY SAUCE",
        ingredient13: "1 tsp FISH SAUCE",
      },
    ],
    thumbnail: "fishCurry.6648171c.jpg",
    method: [
      {
        first:
          "1. Combine rice, water and salt in a medium pot and bring to the boil. As soon as it boils, cover with a lid and reduce to lowest heat to cook for 12 minutes. Turn off heat and leave to steam, still covered, for a further 8 minutes. Do not lift lid during cooking.",
        second:
          "2. Thinly slice bok choy; thinly slice onion; cut broccoli into small florets; cut carrots in half lengthways then thinly slice; pat fish dry and cut into 3-4cm pieces.",
        thrid:
          "3. Heat a little oil in a large, deep fry-pan or pot on medium heat and cook onion and carrots for 3-4 minutes, until softenend.Add curry paste and chill flakes and cook, stirring for about 1 mintute =, until fragrant.",
        fourth:
          "4. Add stock, coconut milk, soy sauce and fish sauce and stir to combine. Bring to a simmer then add broccoli and fish. cover with a lid and cook for about 4 minutes, until broccoli is tender and fish is ooked through, season to taste with soy sauce or fish sauce.",
        fifth:
          "5. Fluff up cooked rice with a fork, stir through bok choy and season to taste. ",
        sixth:
          "6. To serve, divide rice between bowls and top with Thai green fish curry.",
      },
    ],
  },
  {
    title: "Beef Rump Steaks",
    description: "Ready in 35 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "800g POPATOES",
        ingredient2: "Juice of 1 LEMON",
        ingredient3: "600g BEEF RUMP STEAKS",
        ingredient4: "1 tsp HONEY",
        ingredient5: "1 tsp WHOLEGRAIN MUSTARD",
        ingredient6: "1/4 cuo MAYO",
        ingredient7:
          "2 tsp CURRY SPICES (1 part curry powder, 1 part cumin, 1/4 part turmeric)",
        ingredient8: "200g BRUSSELS SPROUTS",
        ingredient9: "1/2 COS LETTUCE",
        ingredient10: "1 APPLE",
        ingredient11: "1 CARROT",
        ingredient12: "25g SLICED ALMONDS",
        ingredient13: "1 Tbsp BUTTER",
        ingredient12: "1 Tbsp FLOUR",
        ingredient12: "1/2 tsp CURRY SPICES",
        ingredient12: "1 cup BEEF STOCK",
      },
    ],
    thumbnail: "beefRumpSteaks.f7676ae6.jpg",
    method: [
      {
        first:
          "1. PREP AND COOK POTATOES. Preheat oven to 220c, Slice potatoes into 0.5cm rounds. Toss on two lined oven trays with little oil. Season well and arrange in a signle layer. Roast for about 25 minutes, until golden and tender. Turnover potatoes halfway, to ensure even cooking. ",
        second:
          "2. PREP DRESSING. Combine all dressing ingredients in a bowl and set aside.",
        thrid:
          "3. PREP SLAW. Thinly slice brussels sprouts then add to bowl with dressing and toss to combine. Thinly slice lettuce and grate apple nd carrot. just before serving add remaining salad ingredients to bowl with dressing, stir to combine ans season to teast.",
        fourth:
          "4. Coom Beef. When potatoes have 15 minutes remaing, heat a large fry-pan or grill pan on high heat. Pat beef dry, season and drizzle with oil. Cook for about 3 minutes each side for medium, or until cooked to your liking. Rest, covered before slicing thinly.",
        fifth:
          "5. Cook Gravy. Return pan to medium heat. Add butter, flour and curry spices and cook, stirring for about 1 minute until fragrant. Whisk in stock, 1/4 cup at time until smooth. Reduce heat to low and cook for 1-2 mintes, stirring until thickened. Stir in resting juices from the beef and season.",
        sixth:
          "6. To serve. Divide potatoes and slaw between plates. Top with sliced beef and gravy.",
      },
    ],
  },
  {
    title: "Teriyaki Beef",
    description: "Ready in 35 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "2 cups RICE",
        ingredient2: "3 cups water",
        ingredient3: "1 BROWN ONION",
        ingredient4: "2 CARROTS",
        ingredient5: "1/2 PUNNET MUSHROOMS",
        ingredient6: "1 BROCCOLI",
        ingredient7: "1 tsp grated GINGER",
        ingredient8: "3 Tbsp water",
        ingredient9: "2 Tbsp SOY SAUCE",
        ingredient10: "600g BEEF SCHNITZEL",
        ingredient11: "100g TERIYAKI SAUCE",
        ingredient12: "15g SESAME SEEDS",
      },
    ],
    thumbnail: "teriyakiBeef.73b2021c.jpg",
    method: [
      {
        first:
          "1. Cook Rice. Combine rice, water and salt in a medium pot and bring to the boil. As soon as it boils, cover with a lid and reduce to lowest heat to cook for 12 minutes. Turn off heat and leave to steam, still covered, for a further 8 minutes. Do not lift lid during cooking.",
        second:
          "2. Prep Veggies. Thinly Slice onion, cut carrots in half lengthways and thinly slice, thinly lice mushrooms and cut broccoli in to florets. Pat beef dry and cut into strips",
        thrid:
          "3. Cook Beef. Heat a little oil in a large fry-pan on high heat. Cook beef, in batches for about 1 minute until browned and rest.",
        fourth:
          "4. Cook Veggies. Wipe pan clean and return to high heat with a little oil. Cook onion and carrots about 4 minutes until softened. Add mushrooms, broccoli, ginger, water and soy sauce and cook for 4 minutes.",
        fifth:
          "5. Add Sauce. When veggies are cooked, return beef and resting juices to pan, along with teriyaki sauce. Cook for 2 minutes, toss unit beef is warmed and coated.",
        sixth:
          "6. To serve. Spoon rice into bowls, top with teriyaki beef and sprinkle with sesame seeds.",
      },
    ],
  },
  {
    title: "Molten Choc-Chunk Brownies",
    description: "Ready in 60 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "1 cup PLAIN FLOUR",
        ingredient2: "3/4 cups COCOA",
        ingredient3: "3/4 cups BROWN SUGAR",
        ingredient4: "1 1/2 cups CASTER SUGAR",
        ingredient5: "175g UNSALTED BUTTER",
        ingredient6: "1 tsp VANILLA EXTRACT",
        ingredient7: "3 EGGS",
        ingredient8: "125g DARK CHOCOLATE",
      },
    ],
    thumbnail: "teriyakiBeef.73b2021c.jpg",
    method: [
      {
        first:
          "1. Place the flour, cocoa, both the sugars, the butter, vanilla and eggs in a large bowl and mix until smooth.",
        second: "2. Add the chocolate and stir to combine.",
        thrid: "3. Preheat oven to 160°C",
        fourth:
          "4. Lightly grease a 20cm square tin and line with non-stick baking paper.",
        fifth: "5. Spread the mixture into the tin.",
        sixth: "6. Bake for 50 minutes – 1 hour or until the brownie is set.",
        seventh:
          "7. Allow to cool in the tin for 5 minutes before slicing into squares and serving warm, or allow to cool completely in the tin",
      },
    ],
  },
  {
    title: "Mac N cheese ",
    description: "Ready in 35 minutes and serves 5 people",
    ingrediates: [
      {
        ingredient1: "2 cups MACARONI PASTA",
        ingredient2: "1 BROWN ONION",
        ingredient3: "1/2 bag BABY SPINACH",
        ingredient4: "1 TOMATO",
        ingredient5: "¾ cups FROZEN PEAS",
        ingredient6: "1 tsp Salt",
        ingredient7: "4 Tbsp BUTTER",
        ingredient8: "3 cups MILK",
        ingredient8: "2 tsp WHOLE GRAIN MUSTARD",
        ingredient8: "1 1/4 cups GRATED CHEESE",
        ingredient8: "4 Tbsp FLOUR",
        ingredient8: "1 Tbsp BUTTER",
        ingredient8: "½ Cup PANKO BREADCRUMBS",
        ingredient8: "½ Tbsp Herbs",
      },
    ],
    thumbnail: "teriyakiBeef.73b2021c.jpg",
    method: [
      {
        first:
          "1. Prepare oven to 200c. Bring a large pot of salted water to the boil. Cook pasta in boiling water for six to 8 minutes, staring occasionally, until just tender. Drain and run under cold water slightly. Toss with a little olive oil so it doesn't stick together.",
        second: "2. Finely diced onion, roughly chop spinach and dice tomato.",
        thrid:
          "3. Heat drizzle of oil in a large frying pan on medium heat. Cook onion for about 3 minutes, until tender. Add peas salt and cook for another 2 minutes. Remove from the heat and stir fruit spinach and tomato. Set aside.",
        fourth:
          "4. Melt first measure of butter in a medium pot on low heat. Stir in flour and combine cooking for two to three minutes, gradually whisk in milk, stirring occasionally. Bring to a gentle simmer and cook for two to three minutes, until thickened, stirring frequently. Add mustard, salt and season to taste.",
        fifth:
          "5. Combine pasta with veggies, sauce and grated cheese and pour into a large baking dish. In a small bowl melt second measure of butter, mix with breadcrumbs and paprika. Sprinkle over pasta and bake for five minutes, turn to grill on high for 2 minutes until golden.",
        sixth: "6. To serve divide mac n cheese between plates.",
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
