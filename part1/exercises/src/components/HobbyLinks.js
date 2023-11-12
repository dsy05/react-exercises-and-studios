export default function HobbyLinks() {
    let hobbyLinks = ["https://www.amazon.com/", "https://www.bestbuy.com/", "https://www.walmart.com/"];
    
    return (
       <div>
          <h3>Shopping For Hobbies Links</h3>
          <a href = {hobbyLinks[0]}>Amazon</a>
          <a href = {hobbyLinks[1]}>Best Buy</a>
          <a href = {hobbyLinks[2]}>Walmart</a>
       </div>      
    );
 }