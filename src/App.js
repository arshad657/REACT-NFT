import './App.css';
import Header from './Header/Header';
import {useState, useEffect } from 'react'
import axios from 'axios';
import PunkList from './PunkList';
import Main from './Main';


function App() {
  const [punkList, setPunkList] = useState([])
  
  const [selectedPunk, setSelectedPunk] =useState(punkList[0])

    const handleClick = (nam) => {

      setSelectedPunk(nam)
  
    }
  

  useEffect(() => {
    const getNFT = async () => {
      const openseaData = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x5F840e2582cBc5e08324aAb90B62CcEe9a1c22e1&order_direction=asc'
      )
      
    setPunkList(openseaData.data.assets)
    
    }
    
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
