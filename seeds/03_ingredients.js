
exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'tomato sauce'},
        {id: 2, name: 'water'},
        {id: 3, name: 'chili powder'},
        {id: 4, name: 'garlic'},
        {id: 5, name: 'oregeno'},
        {id: 6, name: 'cumin'},
        {id: 7, name: 'sour cream'},
        {id: 8, name: 'fresh parsley'},
        {id: 9, name: 'salt'},
        {id: 10, name: 'pepper'},
        {id: 11, name: 'monterey jack cheese'},
        {id: 12, name: 'cheddar cheese'},
        {id: 13, name: 'medium onion'},
        {id: 14, name: 'flour tortillas'},
        {id: 15, name: 'salmon'},
        {id: 16, name: 'white wine'},
        {id: 17, name: 'honey'},
        {id: 18, name: 'balsamic vinegar'},
        {id: 19, name: 'dijon mustard'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredients_id_seq', (SELECT MAX(id) FROM ingredients));`
      )
    })
}
