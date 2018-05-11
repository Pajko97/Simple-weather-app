import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles/Titles';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = '47b84c5bc9d9e462';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country : undefined,
    humidity : undefined,
    description: undefined,
    pressure: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.wunderground.com/api/${API_KEY}/conditions/q/${country}/${city}.json`);
    const data = await api_call.json();
    console.log(data);
      if(city && country) {
      this.setState({
        temperature: data.current_observation.feelslike_c,
        city: data.current_observation.display_location.city,
        country: data.current_observation.display_location.state_name,
        humidity: data.current_observation.relative_humidity,
        description: data.current_observation.weather,
        pressure: data.current_observation.pressure_mb,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        pressure: undefined,
        error: "Please enter valid city and country :)"
      });
    }
  } 
  
  render() {
    return(
      <div>
       <div className="wrapper">
        <div className="main">
          <div className="container">
           <div className="row">
            <div className="col-md-5 title-container">
             <Titles />
            </div>
            <div className="col-md-7 form-container">
              <Form getWeather={this.getWeather} />
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              pressure={this.state.pressure}
              humidity={this.state.humidity} 
              />
            </div>
           </div>
          </div>
        </div>
       </div>
      </div>
    );
  }
}




export default App;
