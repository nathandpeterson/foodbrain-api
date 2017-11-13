
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  table.schema.dropTable('ingredients')
}
