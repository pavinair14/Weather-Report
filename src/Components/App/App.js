import React from 'react';
import './App.scss';
import Weatherdetails from '../Weatherdata/Weatherdetail';

class App extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      weatherdata: [],
      searchkeyword: '',
    };
  }

  componentDidMount() {
    this._isMounted = true;
    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  searchregionname=(e) => {
    this.setState({
      searchkeyword: e.target.value,
    });

    if (e.key === 'Enter') this.getweatherdetails();
  }

  getweatherdetails=() => {
    const { searchkeyword } = this.state;
    const apikey = 'ecc564eefd1f9794b78a4cb3e973aa0d';
    window.fetch(`http://api.weatherstack.com/current?access_key=${apikey}&query=${searchkeyword}`)
      .then(resultdata => resultdata.json())
      .then((resultdata) => {
        if (this._isMounted) {
            this.setState({ weatherdata:resultdata });
            console.log(this.state.weatherdata);
        }
      });
  }

  render() {
    const { weatherdata } = this.state;
    console.log("in");
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            GetWeather
          </h1>
        </header>
        <div className="search-box">
          <input type="text" placeholder="Enter Region name" onKeyUp={this.searchregionname} />
          <button type="button" className="search-icon" onClick={this.getweatherdetails}><i className="fa fa-search" /></button>
        </div>
        <div className="movie-listdetails">
        
          {
            Object.keys(weatherdata).map(data =>{
              console.log("data:",data);
            return(
              <Weatherdetails details={weatherdata[data]} key={data} />
            )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;