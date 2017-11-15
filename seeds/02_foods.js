
exports.seed = function(knex, Promise) {
  return knex('foods').del()
    .then(function () {
      return knex('foods').insert([
        {id: 1, name: 'tortillas', perishable: true, category: 6},
        {id: 2, name: 'tomato paste', perishable: false, category: 2},
        {id: 3, name: 'cheddar cheese', perishable: true, category: 4},
        {id: 4, name: 'canola oil', perishable: false, category: 7},
        {id: 5, name: 'black olives', perishable: false, category: 1},
        {id: 6, name: 'whole milk', perishable: true, category: 4},
        {id: 7, name: 'yogurt', perishable: true, category: 4},
        {id: 8, name: 'rye bread', perishable: true, category: 6},
        {id: 9, name: 'cheez-its', perishable: false, category: 6},
        {id: 10, name: 'dill pickles', perishable: false, category: 2},
        {id: 11, name: 'yellow onions', perishable: true, category: 2},
        {id: 12, name: 'salmon', perishable: true, category: 3},
        {id: 13, name: 'cinnamon', perishable: false, category: 7},
        {id:14, name: 'chili powder', perishable: false, category: 7},
        {id:15, name: 'garlic', perishable: true, category: 7},
        {id:16, name: 'salt', perishable: true, category: 7},
        {id:17, name: 'pepper', perishable: true, category: 7}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('foods_id_seq', (SELECT MAX(id) FROM foods));`
      )
    })
}
