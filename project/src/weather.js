import React from "react";

function weather(props) {
  return (
    <div>
      <p>{`the current temperature is: ${props.temperature}`} </p>
      <p>{`It currently feels like ${props.feelsLike}`}</p>
      <p> {`The current condition is of ${props.condition}`} </p>
      <p> {`With a current humidity of ${props.humidity}%`}</p>
      <img src={props.icon}></img>
    </div>
  );
}

export default weather;
