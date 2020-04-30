import React from 'react';
import Card from './Card';


const CardList = ({obots}) => {
 return (
      <div>
            {
	           obots.map((user,i) => {
         return ( 
         	<Card 
         	key={[i]} 
            id={obots[i].id}
            name={obots[i].name} 
            email={obots[i].email}
            photo={obots[i].photo}
            />
            );
	      })
	    } 
      </div>





 	);


} 

export default CardList;   