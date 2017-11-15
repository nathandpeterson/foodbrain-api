function categories(data){
  const foodCategories = {
    fruit: [],
    vegetables: [],
    protein: [],
    dairy: [],
    legumes: [],
    breadGrains: [],
    bakingSpices: [],
    other: []
  }
  for(let i = 0; i < data.length; i++){
    if(data[i].category == 1) foodCategories.fruit.push(data[i])
    if(data[i].category == 2) foodCategories.vegetables.push(data[i])
    if(data[i].category == 3) foodCategories.protein.push(data[i])
    if(data[i].category == 4) foodCategories.dairy.push(data[i])
    if(data[i].category == 5) foodCategories.legumes.push(data[i])
    if(data[i].category == 6) foodCategories.breadGrains.push(data[i])
    if(data[i].category == 7) foodCategories.bakingSpices.push(data[i])
    if(data[i].category == 99) foodCategories.other.push(data[i])
  }
  return foodCategories
}

module.exports = {categories}
