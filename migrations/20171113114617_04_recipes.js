
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments().notNullable()
    table.string('name').notNullable()
    table.string('prep_time')
    table.text('instructions')
    table.string('yield')
    table.string('notes')
    table.string('recipe_category').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
}
