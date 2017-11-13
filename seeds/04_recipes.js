
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1,
        name: 'cheese enchildas',
        prep_time: '1 hour',
        instructions : 'Preheat oven to 350°. In a large saucepan, combine first six ingredients; bring to a boil. Reduce heat; simmer, uncovered, until thickened, 4-5 minutes, stirring occasionally. Mix sour cream, parsley, salt and pepper; stir in Monterey Jack cheese, 2 cups cheddar cheese and onions. Spread 2 tablespoons sauce over each tortilla; top each with about 1/3 cup cheese mixture and roll up. Place in two greased 13x9-in. baking dishes, seam side down. Pour remaining sauce over top. Bake, uncovered, 20 minutes. Sprinkle with remaining cheddar cheese. Bake until cheese is melted, 4-5 minutes. If desired, serve with toppings.',
        yield: '8 servings',
        recipe_category: 'dinner'
        }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes));`
      )
    })
}
