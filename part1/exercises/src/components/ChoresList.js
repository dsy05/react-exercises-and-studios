import classes from './ChoresList.module.css';

export default function ChoresList () {
    let choresList = ["Empty Dishwasher", "Cut Grass", "Vacuum"]

    return (
         <div>
            <h3 className = {classes.choresHeading}>Movies I Watched This Month</h3>
            <ol>
               <li className={classes.choresText}>{choresList[0]}</li>
               <li className={classes.choresText}>{choresList[1]}</li>
               <li className={classes.choresText}>{choresList[2]}</li>
            </ol>
         </div>
      );
}

