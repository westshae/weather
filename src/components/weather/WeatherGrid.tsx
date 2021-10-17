import styled from "styled-components";
import {useState, useContext, useEffect} from "react";
import {Context} from "../../App"

import WeatherCard from "../weather/WeatherCard"
import Current from "../weather/Current";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:0.5rem;
`


const WeatherGrid = () =>{
  const [temperature, setTemperature] = useState(null);
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [windspeed, setWindspeed] = useState(null);
  const [winddirection, setWinddirection] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [forecast, setForecast] = useState(null);


  useContext(Context).then((value:any)=>{
    setTemperature(value.current.temp);
    setConditiontext(value.current.condition.text);
    setConditionlink(value.current.condition.icon);
    setWindspeed(value.current.windspeed);
    setWinddirection(value.current.winddirection);
    setHumidity(value.current.humidity);
    setForecast(value.forecast.forecastday);
  });

  useEffect(()=>{
    console.log(forecast);
  },[forecast]);
 return(
   <StyledDiv>
      <Current temperature={temperature} conditiontext={conditiontext} conditionlink={conditionlink} windspeed={windspeed} winddirection={winddirection} humidity={humidity} />
      <div>
      <WeatherCard temperature={temperature} conditiontext={conditiontext} conditionlink={conditionlink} windspeed={windspeed} winddirection={winddirection} humidity={humidity}/>

      </div>
   </StyledDiv>
 )
}

export default WeatherGrid;