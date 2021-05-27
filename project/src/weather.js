import React from "react";

function weather(props) {
  return (
    <div className="Weather">
      <div id="Temperature">
        <p>{`the current temperature is: ${props.temperature}`}</p>
      </div>
      <div id="FeelsLike">
        <p>{`It currently feels like ${props.feelsLike}`}</p>
      </div>
      <div id="Condition">
        <p> {`The current condition is of ${props.condition}`} </p>
      </div>
      <div id="Humidity">
        <p> {`With a current humidity of ${props.humidity}%`}</p>
      </div>
      <div id="img">
        <img src={props.icon}></img>
      </div>
    </div>
  );
}

export default weather;
