import styles from './Ingredients.module.css'; 

export default function RecipeIngredients() {
    let ingredients = 
    ["1 kg chicken cut into smaller pieces", 
    "1 tbsp garlic ginger paste", 
    "1 tsp red chili powder",
    "1 tbsp kashmiri red chili powder",
    "1 cup yogurt"];

    return (
        <div>
            <h3>Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
     );
}