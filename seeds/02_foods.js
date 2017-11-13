
exports.seed = function(knex, Promise) {
  return knex('foods').del()
    .then(function () {
      return knex('foods').insert([
        {id: 1, name: 'tortillas', quantity: 5, unit: 'tortilla', perishable: true, category: 6},
        {id: 2, name: 'tomato paste', quantity: 1, unit: 'can', perishable: false, category: 2},
        {id: 3, name: 'cheddar cheese', quantity: 8, unit: 'ounces', perishable: true, category: 4},
        {id: 4, name: 'canola oil', quantity: 10, unit: 'fluid ounces', perishable: false, category: 7},
        {id: 5, name: 'black olives', quantity: 1, unit: 'can', perishable: false, category: 1},
        {id: 6, name: 'whole milk', quantity: 1, unit: 'gallon', perishable: true, category: 4},
        {id: 7, name: 'yogurt', quantity: 1, unit: 'tub', perishable: true, category: 4},
        {id: 8, name: 'rye bread', quantity: 1, unit: 'loaf', perishable: true, category: 6},
        {id: 9, name: 'cheez-its', quantity: 1, unit: 'box', perishable: false, category: 6},
        {id: 10, name: 'dill pickles', quantity: 5, unit: 'pickle', perishable: false, category: 2},
        {id: 11, name: 'yellow onions', quantity: 2, unit: 'onion', perishable: true, category: 2},
        {id: 12, name: 'ground beef', quantity: 1, unit: 'pound', perishable: true, category: 3},
        {id: 13, name: 'cinnamon', quantity: 1, unit: 'jar', perishable: false, category: 7}
      ])
    })
}
