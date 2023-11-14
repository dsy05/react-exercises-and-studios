//single json
// import recipedata from "./recipe.json";

// function IngredientList() {
//   return (
//     <div>
//       <h3>Ingredients</h3>
//       {recipedata.map((data) => {
//         return (
//           <div key={data.name}>
//             {data.ingredients.map((ingredient) => {
//               return <li key={ingredient.id}>{ingredient.ingredientName}</li>
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
 
//  export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array

//multi json
function IngredientList(props) {
  let {ingredients} = props.recipe;

  const IngredientListItems = ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.ingredientName}</li>
  })

  return (
    <div>
      <h3>Ingredients</h3>
      <div>
        {IngredientListItems}
      </div>
    </div>
  )
  
}
 
 export default IngredientList;
 