import React from "react";

function stockData(props) {
  return (
    <div className="StockDat">
      <p>High:{props.high}</p>
      <p>Low:{props.low}</p>
      <p>Open:{props.open}</p>
      <p>Volume:{props.volume}</p>
      <p>Close:{props.close}</p>
    </div>
  );
}

export default stockData;
