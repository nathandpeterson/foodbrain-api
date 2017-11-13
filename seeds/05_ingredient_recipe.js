
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
        {id: 6, recipe_id: 1, ingredient_id: 6, quantity: '1 cup'},
        {id: 7, recipe_id: 1, ingredient_id: 7, quantity: '1/4 cup'},
        {id: 8, recipe_id: 1, ingredient_id: 8, quantity: '1/2 teaspoon'},
        {id: 9, recipe_id: 1, ingredient_id: 9, quantity: '1/2 teaspoon'},
        {id: 10, recipe_id: 1, ingredient_id: 10, quantity: '4 cups'},
        {id: 11, recipe_id: 1, ingredient_id: 11, quantity: '2 1/2 cups'},
        {id: 12, recipe_id: 1, ingredient_id: 12, quantity: '2'},
        {id: 13, recipe_id: 1, ingredient_id: 13, quantity: '16'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredient_recipe_id_seq', (SELECT MAX(id) FROM ingredient_recipe));`
      )
    })
}
