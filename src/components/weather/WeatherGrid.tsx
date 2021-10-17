import styled from "styled-components";
import {useState, useContext, useEffect} from "react";
import {Context} from "../../App"

// import WeatherCard from "./Forecast"
import Forecast from "../weather/Forecast";
import Current from "../weather/Current";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:2fr 5fr;
  gap:0.5rem;
`


const WeatherGrid = () =>{
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [astrology, setAstrology] = useState(null);

  useContext(Context).then((value:any)=>{
    setCurrent(value.current);
    setForecast(value.forecast);
    setAstrology(value.astrology);
  });

 return(
   <StyledDiv>
      <Current current={current} astrology={astrology}/>
      <Forecast forecast={forecast}/>
   </StyledDiv>
 )
}

export default WeatherGrid;