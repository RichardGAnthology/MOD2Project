//TO DO's:
//1. Find a way to make "symbol" for stock market data, dynamic based on user input
//2. add add/remove functionality to stocks and locations
//3. pass down props to functional components and incorporate one more class
//4. add css
//:D

import React, { Component } from "react";
import Weather from "./weather";
import Globalnews from "./globalnews";
import StockNews from './stockNews'
import StockData from "./stockData";
import WatchList from './watchlist'


// let city = this.state.city;
// let state = this.state.state;

class Home extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   stock: "",
    //   // currentPrice: [],
    //   high: [],
    //   low: [],
    //   open: [],
    //   volume: [],

    //   // watchListArr: [],
    //   // watchList: false,
    // };

    this.state = {
      city: "",
      states: "",
      condition: "",
      feelsLike: "",
      humidity: [],
      //precipitation:[],
      temperature: "loading...",
      icon: "",
    };

    this.state = {
      title: "",
      link: "",
      newsIcon: "",
      titleTw0: "",
      linkTwo: "",
      newsIconTwo: "",

      titleThree: "",
      linkThree: "",
      newsIconThree: "",

      titleFour: "",
      linkFour: "",
      newsIconFour: "",

      titleFive: "",
      linkFive: "",
      newsIconFive: "",
    };

    // this.state = {
    //   searchedStocks: [
    //     { stockName: "apple", stockTitle: "", stockLink: "", stockImg: "" },

    //     { stockTitle1: "", stockLink1: "", stockImg1: "" },

    //     { stockTitle2: "", stockLink2: "", stockImg2: "" },

    //     { stockTitle3: "", stockLink3: "", stockImg3: "" },

    //     { stockTitle4: "", stockLink4: "", stockImg4: "" }
    //   ],
    // };

    this.state = {
      searchedStocks: [
        {
          newStock: "TSLA",
          stockTitle: "",
          stockLink: "",
          stockImg: "",
          isAdded: true,
        },

        { stockTitle1: "", stockLink1: "", stockImg1: "" },

        { stockTitle2: "", stockLink2: "", stockImg2: "" },

        { stockTitle3: "", stockLink3: "", stockImg3: "" },

        { stockTitle4: "", stockLink4: "", stockImg4: "" },
      ],

      newStock: "",
      isAdded: "",
      stock: "",
      close:[],
      // currentPrice: [],
      high: [],
      low: [],
      open: [],
      volume: [],
      city: "",
      states: "",
      condition: "loading...",
      feelsLike: "loading...",
      humidity: ["loading..."],
      //precipitation:[],
      temperature: "loading...",
      icon: "loading...",
    };

    // this.getWeather = this.getWeather.bind(this);
    this.getGlobalNews = this.getGlobalNews.bind(this);
    // this.getStockNews = this.getStockNews.bind(this);
    // this.getStockData = this.getStockData.bind(this);
    // this.getWeather = this.getWeather.bind(this);
    // this.fetchWeather = this.fetchWeather.bind(this);
    // this.handleCityChange = this.handleCityChange.bind(this);
    // this.handleStateChange = this.handleStateChange.bind(this);
    this.fetchStockNews = this.fetchStockNews.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.addStock = this.addStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
  }

  // componentDidMount() {
  //   let api =
  //     "http://api.weatherapi.com/v1/current.json?key=0b3e252f561e42a3a5e211104212205&q=newyork New york &aqi=no&days=7";
  //   fetch(api)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         feelsLike: data.current.feelslike_f,
  //         humidity: data.current.humidity,
  //         condition: data.current.condition.text,
  //         temperature: data.current.temp_f,
  //         icon: data.current.condition.icon,
  //       });
  //     });
  //   // .catch(err => alert("Wrong City name!"))
  // }

  getGlobalNews() {
    let api =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=24eeb1aefa064475ad2979bedca27f20";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          title: data.articles[0].title,
          link: data.articles[0].url,
          newsIcon: data.articles[0].urlToImage,

          titleTw0: data.articles[1].title,
          linkTwo: data.articles[1].url,
          newsIconTwo: data.articles[1].urlToImage,

          titleThree: data.articles[2].title,
          linkThree: data.articles[2].url,
          newsIconThree: data.articles[2].urlToImage,

          titleFour: data.articles[3].title,
          linkFour: data.articles[3].url,
          newsIconFour: data.articles[3].urlToImage,

          titleFive: data.articles[4].title,
          linkFive: data.articles[4].url,
          newsIconFive: data.articles[4].urlToImage,
        });
      });
  }

  //dont forget you have to set it up so that on stock search the news gets searched too

  // getStockNews() {
  //   let api =
  //     "https://newsapi.org/v2/everything?q=AAPL&from=2021-05-22&sortBy=popularity&apiKey=24eeb1aefa064475ad2979bedca27f20";
  //   fetch(api)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  // getStockData(event) {
  //   // let stock = [".AAPL"]
  //   //its not a bug its a feature - search the full name or add other parameters
  //   //for a more specific(synonym) search
  //   event.preventDefault();
  //   let symbol = this.state.newStock;
  //   let api =
  //     "https://api.twelvedata.com/time_series?" +
  //     +symbol +
  //     ",&interval=1min&outputsize=1&apikey=5549c18320c74e52bec8159d8fb1128e";

  //   fetch(api)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     //need to make the stock name dynamic
  //     .then((data) => console.log(data.AAPL.values[0].close));
  // }

  // handleCityChange(event) {
  //   this.setState({ city: event.target.value });
  // }

  // handleCityChange = (event) =>{
  //   this.setState({city: event.target.value})
  // }

  // handleStateChange(event) {
  //   this.setState({ states: event.target.value });
  // }

  // handleStateChange = (event) =>{
  //   this.setState({states: event.target.value})
  // }

  // fetchWeather(event) {
  //   event.preventDefault();
  //   let city = this.state.city;
  //   let states = this.state.states;

  //   console.log(states);
  //   console.log(city);

  //   let api =
  //     "http://api.weatherapi.com/v1/current.json?key=0b3e252f561e42a3a5e211104212205&q=" +
  //     city +
  //     " " +
  //     states +
  //     "&aqi=no&days=7";
  //   fetch(api)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.setState({
  //         feelsLike: data.current.feelslike_f,
  //         humidity: data.current.humidity,
  //         condition: data.current.condition.text,
  //         temperature: data.current.temp_f,
  //         icon: data.current.condition.icon,
  //       });
  //     });
  // }

  //Day 2 Question: HOW TO SETSTATE OF ARRAY?!?!?!? 
  //Day 4 Answer: ha 
  handleStockChange(event) {
    this.setState({ newStock: event.target.value });
  }

  fetchStockNews(event) {
    event.preventDefault();
    let symb = this.state.newStock;
    let api =
      "https://newsapi.org/v2/everything?q=" +
      symb +
      "&from=2021-05-22&sortBy=popularity&apiKey=24eeb1aefa064475ad2979bedca27f20";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          stockTitle: data.articles[0].title,
          stockLink: data.articles[0].url,
          stockImg: data.articles[0].urlToImage,
          stockTitle1: data.articles[1].title,
          stockLink1: data.articles[1].url,
          stockImg1: data.articles[1].urlToImage,
          stockTitle2: data.articles[2].title,
          stockLink2: data.articles[2].url,
          stockImg2: data.articles[2].urlToImage,
          stockTitle3: data.articles[3].title,
          stockLink3: data.articles[3].url,
          stockImg3: data.articles[3].urlToImage,
          stockTitle4: data.articles[4].title,
          stockLink4: data.articles[4].url,
          stockImg4: data.articles[4].urlToImage,
        });
      });

    const symbol = this.state.newStock;

    let url =
      "https://api.twelvedata.com/time_series?symbol=" +
      symbol +
      ",&interval=1min&outputsize=1&apikey=5549c18320c74e52bec8159d8fb1128e";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      //need to make the stock name dynamic
      .then((data) => {
        for (const fetchedStock in data) {
          this.setState({
            close: data[fetchedStock].values[0].close,
            high: data[fetchedStock].values[0].high,
            low: data[fetchedStock].values[0].low,
            open: data[fetchedStock].values[0].open,
            volume: data[fetchedStock].values[0].volume,
          });

          console.log(fetchedStock);
          console.log(this.state.high);
        }

        console.log(data);
        console.log(symbol);
        // console.log(data.symbol.values[0].high)
      });
  }

  //1. display array with stockName
  //2. slice it, and push newStock
  //need the newStock in searchedStocks because searchedStocks is the one being mapped
  addStock() {
    let currentStock = this.state.searchedStocks.slice();
    console.log(currentStock);

    let newlyAdded = {
      newStock: this.state.newStock,
      isAdded: true,
    };

    currentStock.push(newlyAdded);
    //next time make sure to think
    this.setState({ searchedStocks: currentStock });
  }

  removeStock() {
    let currentStock = this.state.searchedStocks.slice();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.searchedStocks.map((mapStock) => {
            if (mapStock.isAdded) {
              return (
                <p
                  id={this.state.searchedStocks.indexOf(mapStock)}
                  key={this.state.searchedStocks.indexOf(mapStock)}
                >
                  {" "}
                  Stock being watched: {mapStock.newStock}{" "}
                  <button onClick={this.removeStock}> Remove </button>
                </p>
              );
            }
          })}
        </div>
        <div className="stockData"> 
        <StockData high={this.state.high} low={this.state.low} open={this.state.open} volume={this.state.volume} close={this.state.close}/>
        </div>
        <div>
          {/* <p>High:{this.state.high}</p>
          <p>Low:{this.state.low}</p>
          <p>Open:{this.state.open}</p>
          <p>Volume:{this.state.volume}</p>
          <p>Close:{this.state.close}</p> */}
        </div>
        <div className="Home">
          <p>Homee</p>
          {/* <div className="Weather"> */}
            {/* <button onClick={this.getWeather}> Get Weather </button> */}
            {/* <div> */}
              {/* <Weather 
              temperature = {this.state.temperature} feelsLike = {this.state.feelsLike}
              condition= {this.state.condition} humidity = {this.state.humidity}
              icon ={this.state.icon} */}
              {/* /> */}
            {/* </div> */}
            {/* <p>{`the current temperature is: ${this.state.temperature}`}</p> */}
            {/* <p>{`It currently feels like ${this.state.feelsLike}`}</p> */}
            {/* <p> {`The current condition is of ${this.state.condition}`} </p>
            <p> {`With a current humidity of ${this.state.humidity}%`}</p> */}
            {/* <img src={this.state.icon}></img> */}
          {/* </div> */}
          </div>
          <div className="GlobalNews">
            <Globalnews 
            title={this.state.title} titleTwo={this.state.titleTwo} titleThree={this.state.titleThree} titleFour={this.state.titleFour} titleFive={this.state.titleFive}
            link={this.state.link} linkTwo={this.state.linkTwo} linkThree={this.state.linkThree} linkFour={this.state.linkFour} linkFive ={this.state.linkFive}
            newsIcon={this.state.newsIcon} newsIconTwo={this.state.newsIconTwo} newsIconThree={this.state.newsIconThree} newsIconFour={this.state.newsIconFour} newsIconFive={this.state.newsIconFive}
            />
          </div>
          <div>
            <button onClick={this.getGlobalNews}>Global News </button>
            {/* <div>
              <p>{this.state.title}</p>
              <a href={this.state.link}>{this.state.link}</a>
              <img src={this.state.newsIcon} width="200"></img>
            </div>
            <div>
              <p>{this.state.titleTwo}</p>
              <a href={this.state.linkTwo}>{this.state.linkTwo}</a>
              <img src={this.state.newsIconTwo} width="200"></img>
            </div>
            <div>
              <p>{this.state.titleThree}</p>
              <a href={this.state.linkThree}>{this.state.linkThree}</a>
              <img src={this.state.newsIconThree} width="200"></img>
            </div>
            <div>
              <p>{this.state.titleFour}</p>
              <a href={this.state.linkFour}>{this.state.linkFour}</a>
              <img src={this.state.newsIconFour} width="200"></img>
            </div>
            <div>
              <p>{this.state.titleFive}</p>
              <a href={this.state.linkFive}>{this.state.linkFive}</a>
              <img src={this.state.newsIconFive} width="200"></img>
            </div> */}
          </div>
          <div>
            <button onClick={this.getStockNews}>Stock News</button>
          </div>
          <div className="stockNews">
            <form onSubmit={this.fetchStockNews}>
              <label>Stock:</label>
              <input
                type="text"
                value={this.state.newStock}
                onChange={this.handleStockChange}
              ></input>
              <input type="submit" value="submit"></input>
            </form>
            <div className="StockNews">
              <StockNews 
              stockTitle={this.state.stockTitle} stockTitle1={this.state.stockTitle1} stockTitle2={this.state.stockTitle2} stockTitle3={this.state.stockTitle3} stockTitle4={this.state.stockTitle4}
              stockLink={this.state.stockLink} stockLink1={this.state.stockLink1} stockLink2={this.state.stockLink2} stockLink3={this.state.stockLink3} stockLink4={this.state.stockLink4}
              stockImg={this.state.stockImg} stockImg1={this.state.stockImg1} stockImg2={this.state.stockImg2} stockImg3={this.state.stockImg3} stockImg4={this.state.stockImg4}
              />
            </div>
            <div>
              {/* <p>{this.state.searchedStocks.stockName}</p> */}
              {/* <p>{this.state.stockTitle}</p>
              <a href={this.state.stockLink}>{this.state.stockLink}</a>
              <img src={this.state.stockImg} width="200"></img>
              <p>{this.state.stockTitle1}</p>
              <a href={this.state.stockLink1}>{this.state.stockLink1}</a>
              <img src={this.state.stockImg1} width="200"></img>
              <p>{this.state.stockTitle2}</p>
              <a href={this.state.stockLink2}>{this.state.stockLink2}</a>
              <img src={this.state.stockImg2} width="200"></img>
              <p>{this.state.stockTitle3}</p>
              <a href={this.state.stockLink3}>{this.state.stockLink3}</a>
              <img src={this.state.stockImg3} width="200"></img>
              <p>{this.state.stockTitle4}</p>
              <a href={this.state.stockLink4}>{this.state.stockLink4}</a>
              <img src={this.state.stockImg4} width="200"></img> */}
            </div>
            <div>
              <button onClick={this.addStock}>Add To Watch List</button>
            </div>
          </div>
          <div>
            <button onClick={this.getStockData}>Get Stock Data</button>
          </div>
          <div>
            {/* <WatchList newStock={this.state.newStock} isAdded={this.state.isAdded}/> */}
          </div>
          {/* <div>
            <form onSubmit={this.fetchWeather}>
              <label>City:</label>
              <input
                type="text"
                //problem has something to do with values being the same for both inputs?
                value={this.state.city}
                onChange={this.handleCityChange}
              />

              <label>State:</label>
              <input
                type="text"
                value={this.state.states}
                onChange={this.handleStateChange}
              />
              <input type="submit" value="submit" />
            </form>
          </div> */}
        
      </div>
    );
  }
}

export default Home;
