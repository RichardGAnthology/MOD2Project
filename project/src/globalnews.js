import React from "react";

const globalnews = (props) => {
  return (
    <div>
      <div>
        <p> {props.title} </p>
        <a href={props.link}>{props.link}</a>
        <img src={props.newsIcon} width="200"></img>
      </div>
      <div>
        <p>{props.titleTwo}</p>
        <a href={props.linkTwo}>{props.inkTwo}</a>
        <img src={props.newsIconTwo} width="200"></img>
      </div>
      <p>{props.titleThree}</p>
      <a href={props.linkThree}>{props.linkThree}</a>
      <img src={props.newsIconThree} width="200"></img>
      <div>
        <p>{props.titleFour}</p>
        <a href={props.linkFour}>{props.linkFour}</a>
        <img src={props.newsIconFour} width="200"></img>
      </div>
      <div>
        <p>{props.titleFive}</p>
        <a href={props.linkFive}>{props.linkFive}</a>
        <img src={props.newsIconFive} width="200"></img>
      </div>
    </div>
  );
};

export default globalnews;
