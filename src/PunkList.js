import React from 'react'
import CardCollection from './CardCollection';
import './PunkList.css';

function PunkList(punkData) {
  const punkDataList = punkData.listData;

  return (
    <div className='lists' >
        {punkDataList.map(punk =>
        
        <div onClick={()=> punkData.event(punk)}>
        <CardCollection 
            key={punk.id}
            id={punk.token_id} 
            traits={punk.traits}  
            name={punk.name} 
            img={punk.image_url} 
            
            
            />
            </div>
            ) }
    </div>
  )
}

export default PunkList