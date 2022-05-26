import React from 'react'
import CardCollection from './CardCollection';
import './PunkList.css'

function PunkList(punkData) {
  const punkDataList = punkData.listData;
  console.log(punkDataList)
  
  // const handleClick =() => {
  //   console.log("its being clicked")
  // }
  return (
    <div className='lists'>
        {punkDataList.map(punk =>
        
        <div>
        <CardCollection 
            key ={punk.image_url}
            id={punk.id} 
            traits={punk.traits}  
            name={punk.name} 
            img={punk.image_url} />
            </div>
            ) }
    </div>
  )
}

export default PunkList