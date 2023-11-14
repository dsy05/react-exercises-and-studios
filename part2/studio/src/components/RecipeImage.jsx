//single json
// import recipedata from "./recipe.json";
// import "./styling.css"

// function RecipeImage() {
//   const recipeImage = recipedata.map(recipe => {
//     return (
//       <div key={recipe.name}>
//         <img src={recipe.recipeImage} alt={recipe.author} className="recipeImage" />
//       </div>
//     ) 
//   });
//    return <div>{recipeImage}</div>;
//  }
 
//  export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage

 //multi json
function RecipeImage(props) {
  let {name , recipeImage} = props.recipe;
    return <img src={recipeImage} alt={name} className="recipeImage" />
 }
 
 export default RecipeImage;
 