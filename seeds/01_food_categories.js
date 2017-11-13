
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_categories').insert([
        {id: 1, category: 'fruit'},
        {id: 2, category: 'vegetable'},
        {id: 3, category: 'protein'},
        {id: 4, category: 'dairy'},
        {id: 5, category: 'legumes'},
        {id: 6, category: 'bread and grains'},
        {id: 7, category: 'baking and spices'},
        {id: 99, category: 'other'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('food_categories_id_seq', (SELECT MAX(id) FROM food_categories));`
      )
    })
}
