//single json
// import recipedata from "./recipe.json";

// function RecipeName() {
//   const recipeName = recipedata.map(recipe => {
//     return <h1 key={recipe.name}>{recipe.name}</h1>
//   });
//   return <div>{recipeName}</div>;
// }

// export default RecipeName;

//import return the name of the recipe as a level 1 header

//multi json
function RecipeName(props) {
  let {name} = props.recipe

   return (
    <div>
      <h1>{name}</h1>
    </div>
   )
  }

export default RecipeName;