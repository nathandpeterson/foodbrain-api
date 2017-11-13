
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
  .then(() => knex('food_categories').del())
  .then(() => knex('ingredient_recipe').del())
  .then(() => knex('ingredients').del())
  .then(() => knex('recipes').del())
}
