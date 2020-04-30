import React from'react';



const Card = ({ name, email ,id ,photo}) => {
   
return (
<div className='bg-light-green dib br2 pa2 ma2 grow bw1 shadow5'>
						     
		 <img alt = 'robots' src = {photo} />
 
   
   <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>


 </div> 

	);
} 


export default Card;