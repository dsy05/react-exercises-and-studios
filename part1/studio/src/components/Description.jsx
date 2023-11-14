import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://butteroverbae.com/about/";
    let authorPhoto = "https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-33.jpg";
    let authorName = "Wajiha";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Butter Over Bae</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Pakistani Chicken Biryani</h1>
                    <p>A traditional spicy Karachi Chicken Biryani, made with layering spicy chicken curry with rice.</p>
                </div>
                <RecipeAuthor />
            </div>
        )  
    }
}

export default RecipeDescription;