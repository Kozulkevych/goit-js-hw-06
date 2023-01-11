const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients');
const makeIngredientsList = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('item');
    itemRef.textContent = ingredient;
    return itemRef;
  });
};
const ingredientsRef = makeIngredientsList(ingredients);
ingredientsListRef.append(...ingredientsRef);

// const ingredientsRef  = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//  itemEl.textContent = ingredient
//   return itemEl;
// });


// const ingredientsRef = []

// ingredients.forEach(ingredient => {
// 	const itemRef = document.createElement('li')
// 	itemRef.classList.add('item')
// 	itemRef.textContent = ingredient
// 	ingredientsRef.push(itemRef)
// })

// ingredientsListRef.append(...ingredientsRef)
