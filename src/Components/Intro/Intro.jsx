import React, { useContext, useEffect } from 'react'
import './Intro.css'
import { coinContext } from '../../context'


const Intro = () => {
const {allcoins,searchInput,setSearchInput,displaycoin,setDisplaycoin} = useContext(coinContext)

const setcoinInput = (e) => {
  setSearchInput(e.target.value)
  if(searchInput===""){
    setDisplaycoin(allcoins)
  }
}

const searchcoin = async (e) => {
  e.preventDefault()
 const coins =  await allcoins.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  }) 
 return setDisplaycoin(coins)
}




  return (
    <div className="Intro" id='Intro'>
        <div className="Intro-title">
            <h1>ULTIMATE</h1>
            <h1>Crypto Exchange</h1>
        </div>
        <div className="info">
            <p>Welcome to the world's Biggest Cryptocurrency exchange platform.</p>
            <p> Sign up to explore more about cryptos.</p>
        </div>
        <form onClick={searchcoin}  className="search-bar">
            <input onChange={(e)=>setcoinInput(e)} type="text" list='dataList' value={searchInput} placeholder='search Crypto' required/>
            <datalist id='dataList'>
               {allcoins.map((item,index) => <option key={index} value={item.name}/>)}
            </datalist>
            <button>Search</button>
        </form>
    </div>
  )
}

export default Intro