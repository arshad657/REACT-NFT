import './App.css';
import Header from './Header/Header';
import {useState, useEffect } from 'react'
import axios from 'axios';
// import CardCollection from './CardCollection';
import PunkList from './PunkList';
import Main from './Main';


function App() {
  const [punkList, setPunkList] = useState([])
  // console.log(punkList[0])
  const [selectedPunk, setSelectedPunk] =useState(punkList[0])
  // console.log(selectedPunk)

    const handleClick = (nam) => {
      // console.log('clicked')
      setSelectedPunk(nam)
      // console.log(nam.name)
    }
    if(selectedPunk){
      // console.log(selectedPunk)
      
    }
    // else{
    //   setSelectedPunk(punkList[0])
    //   console.log(selectedPunk.name)
      
    // }
    // console.log(selectedPunk.name)
  // useEffect((nam)=> {
  //   setSelectedPunk(nam)
  // },[selectedPunk])
  

  useEffect(() => {
    const getNFT = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x5F840e2582cBc5e08324aAb90B62CcEe9a1c22e1&order_direction=asc'
      )
      
    setPunkList(openseaData.data.assets)
    
    }
    // console.log(punkList)
    
    return getNFT()
  }, [])
  
  return (
    <div className="App">

      <Header />
      <Main punkList={punkList} selectedPunk={selectedPunk}/>
      <PunkList listData={punkList} event={nam => handleClick(nam)}/>
      
        
        
      

    </div>
  );
}

export default App;
