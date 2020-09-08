import React, { Component } from "react";
import WeatherCard from "./weatherCard";

// Extension
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

class Carousel extends Component {
  state = {
    savedDate: null,
    weathers: [],
  };

  constructor() {
    super();
    this.state.savedDate = new Date();
    this.state.weathers = this.generateDates(this.state.savedDate, 0);
  }

  generateDates(date, step) {
    // when step is true we go right, when step is false we go left.
    var returnWeathers = [];
    var possibleTypes = ["Sunny", "Cloudy", "Storming", "Raining"];
    var rem = 8 - date.getDay();

    for (var i = 0; i < 7; i++) {
      if (step < 0) {
        rem = -(6 + date.getDay());
      }
      var add = rem + i;
      var randomTemp = Math.floor(Math.random() * 60) + 40;
      var randomType = possibleTypes[Math.floor(Math.random() * 4)];
      var newDate = date.addDays(add);
      var stringDate = newDate.toDateString();
      var splitDate = stringDate.split(" ");
      var appendedDate = splitDate[0] + "-" + splitDate[1] + "-" + splitDate[2];
      returnWeathers.push({
        weather: randomTemp,
        type: randomType,
        day: appendedDate,
      });
    }
    if (step != 0) {
      this.setState({ weathers: returnWeathers, savedDate: date.addDays(rem) });
    }
    return returnWeathers;
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-left-square-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => this.generateDates(this.state.savedDate, -1)}
        >
          <path
            fill-rule="evenodd"
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
          />
        </svg>

        {this.state.weathers.map(function (wo, idx) {
          return <WeatherCard key={idx} weatherObj={wo}></WeatherCard>;
        })}

        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right-square-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => this.generateDates(this.state.savedDate, 1)}
        >
          <path
            fill-rule="evenodd"
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
          />
        </svg>
      </div>
    );
  }
}

export default Carousel;
