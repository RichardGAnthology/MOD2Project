import React, { Component } from "react";
import Weather from "./weather";

class mountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: "loading...",
      feelsLike: "loading...",
      humidity: ["loading..."],
      //precipitation:[],
      temperature: "loading...",
      icon: "loading...",
    };
    this.fetchWeather = this.fetchWeather.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(event) {
    this.setState({ states: event.target.value });
  }
  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }
  fetchWeather(event) {
    event.preventDefault();
    let city = this.state.city;
    let states = this.state.states;

    console.log(states);
    console.log(city);

    let api =
      "http://api.weatherapi.com/v1/current.json?key=0b3e252f561e42a3a5e211104212205&q=" +
      city +
      " " +
      states +
      "&aqi=no&days=7";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          feelsLike: data.current.feelslike_f,
          humidity: data.current.humidity,
          condition: data.current.condition.text,
          temperature: data.current.temp_f,
          icon: data.current.condition.icon,
        });
      });
  }
  componentDidMount() {
    let api =
      "http://api.weatherapi.com/v1/current.json?key=0b3e252f561e42a3a5e211104212205&q=newyork New york &aqi=no&days=7";
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          feelsLike: data.current.feelslike_f,
          humidity: data.current.humidity,
          condition: data.current.condition.text,
          temperature: data.current.temp_f,
          icon: data.current.condition.icon,
        });
      });
    // .catch(err => alert("Wrong City name!"))
  }
  render() {
    return (
      <div>
        <div id="WeatherFetch">
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
        </div>
        <div>
          <Weather
            temperature={this.state.temperature}
            feelsLike={this.state.feelsLike}
            condition={this.state.condition}
            humidity={this.state.humidity}
            icon={this.state.icon}
          />
        </div>
      </div>
    );
  }
}

export default mountClass;
