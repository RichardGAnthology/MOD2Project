import React from "react";

function stockNews(props) {
  return (
    <div>
      <div>
        <p>{props.stockTitle}</p>
        <a href={props.stockLink}>{props.stockLink}</a>
        <img src={props.stockImg} width="200"></img>
      </div>
      <div>
        <p>{props.stockTitle1}</p>
        <a href={props.stockLink1}>{props.stockLink1}</a>
        <img src={props.stockImg1} width="200"></img>
      </div>
      <div>
        <p>{props.stockTitle2}</p>
        <a href={props.stockLink2}>{props.stockLink2}</a>
        <img src={props.stockImg2} width="200"></img>
      </div>
      <div>
        <p>{props.stockTitle3}</p>
        <a href={props.stockLink3}>{props.stockLink3}</a>
        <img src={props.stockImg3} width="200"></img>
      </div>
      <div>
        <p>{props.stockTitle4}</p>
        <a href={props.stockLink4}>{props.stockLink4}</a>
        <img src={props.stockImg4} width="200"></img>
      </div>
    </div>
  );
}

export default stockNews;
