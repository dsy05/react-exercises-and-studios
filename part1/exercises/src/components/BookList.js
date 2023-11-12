import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Fine Reads";
   let book1 = "https://prodimage.images-bn.com/pimages/9781608463244_p0_v3_s192x300.jpg";
   let book2 = "https://prodimage.images-bn.com/pimages/9789352979929_p0_v1_s192x300.jpg";
   let book3 = "https://prodimage.images-bn.com/pimages/9780143123545_p0_v2_s192x300.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <div >
            <img className={classes.border} src={book1} alt="The Battle for Justice in Palestine" />
            <img className={classes.border} src={book2} alt="The Panjab, North-West Frontier Province, and Kashmir" />
            <img className={classes.border} src={book3} alt="Private Empire: ExxonMobil and American Power" />
         </div>
      </div>      
   );
}