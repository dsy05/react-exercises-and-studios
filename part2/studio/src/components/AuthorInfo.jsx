//single json
// import recipedata from "./recipe.json";
// import "./styling.css"

// function AuthorInfo() {
//   const recipeAuthor = recipedata.map(recipe => {
//     return <div key={recipe.name}>{recipe.author}</div> 
//   });

//   const recipeAuthorImage = recipedata.map(recipe => {
//     return (
//       <div key={recipe.name}>
//         <img src={recipe.authorImage} alt={recipe.author} class="authorImage"/>
//       </div> 
//     )  
//   });

//   const recipeWebsite = recipedata.map(recipe => {
//     return <a key={recipe.name} href={recipe.recipeWebsite}>View Recipe Site</a>
//   });

//   return (
//     <div>
//        {recipeAuthorImage}
//        {recipeAuthor}
//        {recipeWebsite}
//     </div>
//   );
//  }
 
//  export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 
 //multi json
function AuthorInfo(props) {
  let {author, authorImage, recipeWebsite} = props.recipe;

  const RecipeAuthor = () => <div>{author}</div>;

  const RecipeAuthorImage = () => {
    return (
      <div>
        <img src={authorImage} alt={author} class="authorImage"/>
      </div>
    )};

  const RecipeWebsite = () => {
    return <a href={recipeWebsite}>View Recipe Site</a>
  } 

  return (
    <div>
       <RecipeAuthor />
       <RecipeAuthorImage />
       <RecipeWebsite />
    </div>
  );
 }
 
 export default AuthorInfo;