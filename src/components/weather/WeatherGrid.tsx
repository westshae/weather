import styled from "styled-components";
import {useState, useContext, useEffect} from "react";
// import {Context} from "../layout/Input"

// import WeatherCard from "./Forecast"
import Forecast from "../weather/Forecast";
import Current from "../weather/Current";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:2fr 5fr;
  gap:0.5rem;
`


const WeatherGrid = (props:any) =>{
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [astrology, setAstrology] = useState(null);

  useEffect(()=>{
    if(props.data != undefined){
      setCurrent(props.data.current);
      setForecast(props.data.forecast);
      setAstrology(props.data.astrology);
    }
  }, [props]);
  

 return(
   <StyledDiv>
      <Current current={current} astrology={astrology}/>
      <Forecast forecast={forecast}/>
   </StyledDiv>
 )
}

export default WeatherGrid;