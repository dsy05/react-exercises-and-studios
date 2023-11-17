import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Appetizer", value: "Appetizer"},
      {label: "Tea Time", value: "Tea Time"},
      {label: "Brunch", value: "Brunch"},
   ];

   let boardOptions = boards.map((board) => {
      return <option key={board.value}>{board.label}</option>
   });


   const [boardName, setBoardName] = useState('no boards yet!');

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
