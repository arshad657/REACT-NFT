import React from 'react'
import './Main.css'
import {useState, useEffect } from 'react'

function Main(punkList) {
    // console.log(punkList.punkList)
    const [activePunk, setActivePunk] = useState([])
    // const dataList = punkList.punkList;


    // const data = punkList.punkList[0];
            
    //     if(activePunk){
    //           console.log(activePunk)
    // console.log(punkList.punkList.length)

    //     }

    
    // console.log(data)
    
    

    // useEffect(() => {
    // setActivePunk(punkList.punkList[0])
    // },[activePunk])
    // console.log(activePunk)

    

  return (
    
    <div className='main'>
        { activePunk 
        ? <div>
            <h1 className='white'>I am kashfi</h1>
            


            <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img src={activePunk.image_url} alt="" className='selectedPunk'/>
                </div>
            </div>
        
            <div className='info'>

            <div className='punkDetails' style={{color: "#fff"}}>
            <div className='title'>{activePunk.name}</div>
            <span className='itemNumber'> #.{activePunk.token_id}</span>
            </div>



            <div className="owner">
            <div className="ownerImageContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="" />
            </div>
            <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                    <div>0x313235fver62frr8552frf265525485fer</div>
                    <div className="ownerHandle">@cleverprogrammer</div>
                </div>
                <div className='medias'>
                <div >
                    <img src="./assets/owner/instagram.png" className="ownerLink" alt="" />
                </div>
                <div >
                    <img className="ownerLink" src="./assets/owner/twitter.png" alt="" />
                </div>
                <div >
                    <img className="ownerLink" src="./assets/owner/more.png" alt="" />
                </div>
                </div>
                
            </div>
        </div>
        </div>


            </div>

            </div> 

    :   <div>
        <h2>No datas</h2>
        </div>}

        
        
        
        

            

    </div>
  )
}

export default Main
