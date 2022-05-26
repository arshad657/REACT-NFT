import React from 'react'
import CardCollection from './CardCollection';
import './PunkList.css'
import {useState} from 'react'

function PunkList(punkData) {
  const punkDataList = punkData.listData;

  // const [selectedPunk, setSelectedPunk] = useState()
  
  // console.log(punkDataList)
  // const handleClick= (punk) => {
  // console.log('its clicked')
  // }
  // const func =  ;
  // // console.log(func)
  
  
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