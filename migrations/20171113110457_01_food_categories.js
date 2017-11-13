
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_categories', table => {
    table.increments()
    table.string('category').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_categories')
};
