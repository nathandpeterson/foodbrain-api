
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_categories', table => {
    table.increments()
    table.string('category').notNullable()
    // What happened to timestamps?  :(
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_categories')
}

// query to select particular food types select name, quantity FROM foods JOIN food_categories on food_categories.id = foods.category WHERE foods.category = 6;
