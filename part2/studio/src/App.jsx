import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

import recipedata from "./components/recipe.json";

//studio with single json item
// export default function App() {
//   return (
//     <>
//       <RecipeImage />
//       <RecipeName />
//       <RateARecipe rating={5} />
//       <Button saveButton={true} />
//       <AuthorInfo />
//       <IngredientList />
//     </>
//   );
// }

//studio multiple json items
// using props to pass to be flexable, everyrhing coded in the app, using it to pass it down by recipe by recipe using props 
//when you want to display multipule pins on same page

export default function App() {
  const pins = recipedata.map(recipe => {
    return (
      <div key={recipe.name}>
        <RecipeImage recipe={recipe}/>
        <RecipeName recipe={recipe}/>
        <RateARecipe rating={5} />
        <Button saveButton={true} />
        <AuthorInfo recipe={recipe}/>
        <IngredientList recipe={recipe}/>
      </div>
    );
  })

  return (
    <>
      {pins}
    </>
  );
}
