import React from 'react';

const Card = (props) => {
  return (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}set=set2&size=180x180`}/>
    <h1>{props.monster.name}</h1>
    <h2>{props.monster.email}</h2>
  </div>
  )
};

export default Card;