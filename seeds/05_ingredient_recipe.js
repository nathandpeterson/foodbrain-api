
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipe').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: '2 15-ounce cans'},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: '1 1/3 cups'},
        {id: 3, recipe_id: 1, ingredient_id: 3, quantity: '2 tablespoons'},
        {id: 4, recipe_id: 1, ingredient_id: 4, quantity: '2 cloves'},
        {id: 5, recipe_id: 1, ingredient_id: 5, quantity: '1 teaspoon'},
        {id: 6, recipe_id: 1, ingredient_id: 6, quantity: '1/2 teaspoon'},
        {id: 7, recipe_id: 1, ingredient_id: 7, quantity: '1 cup'},
        {id: 8, recipe_id: 1, ingredient_id: 8, quantity: '1/4 cup'},
        {id: 9, recipe_id: 1, ingredient_id: 9, quantity: '1/2 teaspoon'},
        {id: 10, recipe_id: 1, ingredient_id: 10, quantity: '1/2 teaspoon'},
        {id: 11, recipe_id: 1, ingredient_id: 11, quantity: '4 cups'},
        {id: 12, recipe_id: 1, ingredient_id: 12, quantity: '2 1/2 cups'},
        {id: 13, recipe_id: 1, ingredient_id: 13, quantity: '2'},
        {id: 14, recipe_id: 1, ingredient_id: 14, quantity: '16'},
        {id: 15, recipe_id: 2, ingredient_id: 15, quantity: '6 5-ounce fillets'},
        {id: 16, recipe_id: 2, ingredient_id: 4, quantity: '4 cloves'},
        {id: 17, recipe_id: 2, ingredient_id: 16, quantity: '1 tablespoon'},
        {id: 18, recipe_id: 2, ingredient_id: 17, quantity: '1 tablespoon'},
        {id: 19, recipe_id: 2, ingredient_id: 18, quantity: '1/3 cup'},
        {id: 20, recipe_id: 2, ingredient_id: 19, quantity: '4 teaspoons'},
        {id: 21, recipe_id: 2, ingredient_id: 5, quantity: '1 tablespoon'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredient_recipe_id_seq', (SELECT MAX(id) FROM ingredient_recipe));`
      )
    })
}
