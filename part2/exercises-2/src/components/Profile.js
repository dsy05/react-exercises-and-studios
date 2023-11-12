import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

const listItem = oceans.map(ocean => //declared listItem to equal ocean.map set ocean as the callback parameter
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className='img'/>
      <h2>Fun Facts</h2>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>
         <Button />
   </div>
); // each profile contained in the div since working with json object uisng curly braces

function Profile() {
   

   return(
      <ul>
         {listItem}
      </ul> 
   );
}

export default Profile;