import React from 'react';

const SearchBox =({searchfield, searchChange}) => {
  return (
    <div>
     <input
      className= 'pa2 ba b--green bg-lightest-blue'
      type='search'
      placeholder ='search Robots'
      onChange = {searchChange }
      />
    </div>
  	);
}

export default SearchBox;

