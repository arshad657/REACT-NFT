import React from 'react'
import './Main.css'
import {useState, useEffect } from 'react'

function Main(punkList) {
    // console.log(punkList.punkList)
    const [activePunk, setActivePunk] = useState()
    const selectedPunk = punkList.selectedPunk;
    
    // console.log(selectedPunk)
    useEffect(() => {
        setActivePunk(selectedPunk)
      }, [selectedPunk])
    //   console.log(activePunk)
    
    // console.log(selectedPunk)
//     {!activePunk 
//     ? setActivePunk(punkList.punkList[0])
//     : setActivePunk(selectedPunk)
// }
//     console.log(activePunk)

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
                <img src={selectedPunk.creator.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                    <div>{selectedPunk.creator.address}</div>
                    <div className="ownerHandle">@ahmedarshad8565</div>
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
    <div className='mainContent'>
    <div className='punkHighlight'>
        <div className='punkContainer'>
            <img src="https://lh3.googleusercontent.com/7O25nWAZopFx9wNBCGGvXQJW1OjIH5oyG94SXzURQ7RavaVdcJHx0iwxs4ziuMXmh9LzlQUThOqaT8TQI-mu2XqwvGmeqSR0Du1KHA" alt="" className='selectedPunk'/>
        </div>
    </div>

    <div className='info'>

    <div className='punkDetails' style={{color: "#fff"}}>
    <div className='title'>Space Punk</div>
    <span className='itemNumber'> #.5</span>
    </div>



    <div className="owner">
    <div className="ownerImageContainer">
        <img src="https://storage.googleapis.com/opensea-static/opensea-profile/32.png" alt="" />
    </div>
    <div className="ownerDetails">
        <div className="ownerNameAndHandle">
            <div>0x835c77298fe580df7c59582fd4c3967c6bd3bca2</div>
            <div className="ownerHandle">@ahmedarshad8565</div>
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

    </div>}
        

        
        
        
        

            

    </div>
  )
}

export default Main
