
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments().notNullable()
    table.string('name').notNullable()
    table.string('instructions')
    table.string('serving quantity')
    table.string('notes')
    table.string('prep time')
    table.string('recipe_category').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
}
