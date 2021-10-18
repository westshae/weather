import styled from "styled-components";
import {useState, useEffect} from "react";

import Forecast from "../weather/Forecast";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:1fr;
  gap:0.5rem;
`

const WeatherGrid = (props:any) =>{
  //Stores all data received from weather JSON
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [astrology, setAstrology] = useState(null);

  useEffect(()=>{//If props updates, update local variables
    if(props.data != undefined){
      setCurrent(props.data.current);
      setForecast(props.data.forecast);
      setAstrology(props.data.astrology);
    }
  }, [props]);

 return(
   <StyledDiv>
      <Forecast forecast={forecast} current={current} astrology={astrology}/>
   </StyledDiv>
 )
}

export default WeatherGrid;