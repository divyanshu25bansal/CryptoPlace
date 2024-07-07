import { createContext, useCallback, useEffect, useState } from "react";

export const coinContext = createContext();

const CoinApp = (props) => {
  const [allcoins, setcoinData] = useState([]); // state that stores allcoins
  const [displaycoin, setDisplaycoin] = useState([]); // store display coins
  const [searchInput, setSearchInput] = useState(""); // state for searching Crypto
  const [currency, setCurrency] = useState("inr"); // to set currency format
  const [symbol,setSymbol] = useState("")

  const gatherMarketData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-AeTSzE1uQqaGAaFCa3vZco7F",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setcoinData(response), setDisplaycoin(response);
      })
      .catch((err) => console.error(err));
  };

  
  useEffect(() => {
    gatherMarketData();
    if(currency==="inr"){
      setSymbol("₹")
    }else {
      setSymbol("$")
    }
  }, [currency]);





  const values = {
    allcoins,
    searchInput,
    setSearchInput,
    setcoinData,
    displaycoin,
    setDisplaycoin,
    currency,
    setCurrency,
    symbol
  };

  return (
    <coinContext.Provider value={values}>{props.children}</coinContext.Provider>
  );
};

export default CoinApp;
