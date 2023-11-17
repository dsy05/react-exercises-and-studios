import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://twoclovesinapot.com/get-to-know-us/";
   let authorPhoto = "https://twoclovesinapot.com/wp-content/uploads/2018/12/dsc_4064-2-1-1024x681.jpg";
   let authorName = "Sarah Mirza & Vaquas Saleem";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", width: "75%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = 
   ["Yogurt mixture- Yogurt and sugar mix them together", 
   "Chutneys- Khatti Meethi and Green Chutney",
   "Potatoes and chickpea mixture- This mixture consist of chickpeas and potatoes along with seasonings and fresh cilantro.",
   "Sev- Dried fried South Asian noodle bits.",
   "Papdi - They are little circular shape salty bits."];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   });

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Golgappa Chaat</h1>
            <p>Golgappa Chaat is stuffing crispy puffed puris with seasoned chickpeas and potatoes and topped with Chutneys, fried noodle bits, and sweet yogurt mixture.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://twoclovesinapot.com/wp-content/uploads/2022/12/IMG_0901_jpg-768x1024.jpg" alt="GOLGAPPAY" className="imageUpdates" height="600px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
