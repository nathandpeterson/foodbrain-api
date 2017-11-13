
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient_recipe', table => {
    table.increments()
    table.integer('ingredient_id').notNullable()
    table.foreign('ingredient_id').references('ingredients.id')
    table.integer('recipe_id').notNullable()
    table.foreign('recipe_id').references('recipes.id')
    table.string('units').notNullable()
    table.integer('quantity').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredient_recipe')
}