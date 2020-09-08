import React, { Component } from "react";

class WeatherCard extends Component {
  formatColor(typeP) {
    switch (typeP) {
      case "Raining":
        return "#0000b1";
        break;
      case "Sunny":
        return "#6262ff";
        break;
      case "Cloudy":
        return "#6c6c93";
        break;
      case "Storming":
        return "#000014";
        break;
    }
  }

  formatWeather(weatherP) {
    return weatherP + "°F";
  }

  formatDate(dayP) {
    const sd = dayP.split("-");
    return sd[0] + ", " + sd[1] + " " + sd[2];
  }

  render() {
    const { weather, type, day } = this.props.weatherObj; // Object destructuring here
    return (
      <div
        className="card"
        style={{
          width: "15%",
          height: 120,
          display: "inline-block",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <div
          style={{
            backgroundColor: this.formatColor(type),
            height: 40,
          }}
        >
          <p
            className="font-weight-bold"
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "40px",
              fontFamily: "Roboto",
              fontSize: 12,
              color: "white",
            }}
          >
            {this.formatDate(day)}
          </p>
        </div>
        <h6 style={{ paddingTop: 10, fontSize: 12, fontFamily: "Roboto" }}>
          {type}
        </h6>
        <p className="font-weight-bold">{this.formatWeather(weather)}</p>
      </div>
    );
  }
}

export default WeatherCard;
