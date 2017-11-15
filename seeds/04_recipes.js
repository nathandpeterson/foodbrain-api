
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1,
        name: 'Cheese Enchildas',
        prep_time: '1 hour',
        instructions : 'Preheat oven to 350°. In a large saucepan, combine first six ingredients; bring to a boil. Reduce heat; simmer, uncovered, until thickened, 4-5 minutes, stirring occasionally. Mix sour cream, parsley, salt and pepper; stir in Monterey Jack cheese, 2 cups cheddar cheese and onions. Spread 2 tablespoons sauce over each tortilla; top each with about 1/3 cup cheese mixture and roll up. Place in two greased 13x9-in. baking dishes, seam side down. Pour remaining sauce over top. Bake, uncovered, 20 minutes. Sprinkle with remaining cheddar cheese. Bake until cheese is melted, 4-5 minutes. If desired, serve with toppings.',
        yield: '8 servings',
        recipe_category: 'dinner'
      },
      {id: 2,
      name: 'Balsamic-Glazed Salmon Fillets',
      prep_time: '30 minutes',
      instructions : 'Preheat oven to 400 degrees F (200 degrees C). Line a baking sheet with aluminum foil, and spray with non-stick cooking spray. Coat a small saucepan with non-stick cooking spray. Over medium heat, cook and stir garlic until soft, about 3 minutes. Mix in white wine, honey, balsamic vinegar, mustard, and salt and pepper. Simmer, uncovered, for about 3 minutes, or until slightly thickened. Arrange salmon fillets on foil-lined baking sheet. Brush fillets with balsamic glaze, and sprinkle with oregano. Bake in preheated oven for 10 to 14 minutes, or until flesh flakes easily with a fork. Brush fillets with remaining glaze, and season with salt and pepper. Use a spatula to transfer fillets to serving platter, leaving the skin behind on the foil.',
      yield: '6 servings',
      recipe_category: 'dinner'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes));`
      )
    })
}
