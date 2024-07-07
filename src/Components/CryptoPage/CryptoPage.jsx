import React, { useContext, useEffect, useState } from "react";
import "./CryptoPage.css";
import { useParams } from "react-router-dom";
import { coinContext } from "../../context";
import LineChart from "../LineChart/LineChart";

const CryptoPage = () => {
  const { coinId } = useParams();
  const [cryptoData, setCryptoData] = useState();
  const { currency ,symbol} = useContext(coinContext);
  const [historyData, setHistoryData] = useState();

  const gatherCryptodata = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCryptoData(response))
      .catch((err) => console.error(err));
  };

  const gatherHistoricalData = async () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistoryData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    gatherCryptodata();
    gatherHistoricalData();
  }, [currency]);

  if ((cryptoData, historyData)) {
    return (
      <div className="crypto-data">
        <div className="crypto-data-image">
          <img src={cryptoData.image.large} />
          <p>
            {cryptoData.name} ({cryptoData.symbol.toUpperCase()})
          </p>
        </div>
        <div className="line-chart">
          <LineChart historyData={historyData} />
        </div>
        <div className="crypto-data-details">
          <ul>
            <li>market_cap_rank</li>
            <li>{cryptoData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Market_cap</li>
            <li>{symbol} {cryptoData.market_data.market_cap[currency].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Price</li>
            <li>{symbol} {cryptoData.market_data.current_price[currency].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24h Low</li>
            <li>{symbol} {cryptoData.market_data.low_24h[currency].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24h High</li>
            <li>{symbol} {cryptoData.market_data.high_24h[currency].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default CryptoPage;
