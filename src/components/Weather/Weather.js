import React from "react";
import ThermometerPicture from "./thermometer.png";
import CloudPicture from "./cloud.png";
import PressurePicture from "./pressure.png";
import HumidityPicture from "./humidity.png";


const Weather = (props) => { 
    return(
        <div className="weather">
        { props.temperature &&                
         <p className="result-element">
            <img src={ThermometerPicture} alt="thermometer"></img>
            <span className="weather__key" > Temperature : </span> 
            {props.temperature} C </p> }

        { props.humidity &&                   
         <p className="result-element">
            <img src={HumidityPicture} alt="waterdrop"></img>
            <span className="weather__key" > Humidity : </span>
            {props.humidity} </p> }

        { props.description &&                
         <p className="result-element">
            <img src={CloudPicture} alt="cloud"></img>
            <span className="weather__key" > Description : </span>
            {props.description}</p> }

        { props.pressure &&                   
         <p className="result-element">
            <img src={PressurePicture} alt="airpressure"></img>
            <span className="weather__key" > Pressure : </span>
            {props.pressure} mb</p> }
            
        { props.error && <p>{props.error}</p>}
         </div>
    );
}


export default Weather;