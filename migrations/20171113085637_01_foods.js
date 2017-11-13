
exports.up = function(knex, Promise) {
  return knex.schema.createTable('foods', table => {
    table.increments().notNullable()
    table.string('name').notNullable()
    table.string('unit')
    table.integer('quantity')
    table.boolean('perishable')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('foods')
}
