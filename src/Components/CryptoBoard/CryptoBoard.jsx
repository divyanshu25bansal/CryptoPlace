import React, { useContext, useState } from 'react'
import './CryptoBoard.css'
import { coinContext } from '../../context'
import { Link } from 'react-router-dom'


const CryptoBoard = () => {
    const {displaycoin,symbol, gathercoinData} = useContext(coinContext)
    
  return (
    <div className="cryto-board">
        <div className="title">
            <p>#</p>
            <p className='crypto-name'>coin</p>
            <p>Price</p>
            <p>24H Change</p>
            <p className='market-data'>Market Cap</p>
        </div>

        {displaycoin.slice(0,10).map((item,index)=>{
            return (
        <Link to={`/coin/${item.id}`} key={index}>
           <div className="crypto-board-coins" onClick={()=> gathercoinData(item.id)}>
           <p>{index+1}</p>
            <div  className='crypto-board-image'>
                <img src={item.image} alt="" />
            <p>{item.symbol}</p>
            </div>
            <p>{symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h>0?"green":"red"} >{Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p className='market-data'>{symbol} {(item.market_cap).toLocaleString()}</p>
           </div>
        </Link>
            )
        })}
    </div>
  )
}

export default CryptoBoard


{/* <div className='coin-board-image' >
<img src={item.image} alt="" />
<p>{item.symbol}</p>
</div> */}