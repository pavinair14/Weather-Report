import React from 'react';
import './weatherdetail.scss';

class Weatherdetail extends React.Component {

      render() {
        const { details } = this.props;
        return (
          <div className="weatherlist">
              <div className="location">
                  <h2>{details.name}</h2>
                  <p>{details.region},{details.country}</p>
                  <p>{details.localtime}</p>
              </div>
              <div className="weather-details">
                <h5>{details.weather_descriptions}</h5>
                <p>Temperature:{details.temperature}</p>
                <p>Wind Speed:{details.wind_speed}</p>
                <p>Humidity:{details.humidity}</p>
              </div>
          </div>
        );
      }
}

export default Weatherdetail;