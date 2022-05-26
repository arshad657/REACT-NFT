import React from 'react'
import './CardCollection.css'
import {useState} from 'react'

function CardCollection(punk) {
    
    const {id, name, traits, img} = punk;

    // const handleClick= (name, id) => {
    //   setSelectedPunk(name)
    //   console.log(selectedPunk)
    // }
    
  return (
      
    <div className='collection-card'>
        
        <div className="pic">
            <img src={img} alt="" />
            </div>
        <div className='punk-info'>
            <h2>{name}</h2>
                <p className='id'>.#{id}</p>
            <div className='price'>
              <img src="./assets/weth.png" alt="" className='weth-img'/>
              <p >{traits[0]?.value}</p>
        </div>
            
        </div>
        </div>

  );
  
}

export default CardCollection;