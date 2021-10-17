import {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-template-rows:repeat(2, 1fr);
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  border-radius:1rem;
`

const Paragraph = styled.p`
  font-size:1.5em;
  display:grid;
  color:#312E3D;
  justify-content:center;
  align-items:center;
  white-space:nowrap;
`

const Image = styled.img`
  display:grid;
  
  justify-content:center;
  align-items:center;
  margin-left:auto;
  margin-right:auto;
`


const WeatherCard = (props:any) =>{
  const [date, setDate] = useState("");
  const [humidity, setHumidity] = useState("");
  const [mintemperature, setMintemperature] = useState("");
  const [maxtemperature, setMaxtemperature] = useState("");
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [chanceofrain, setChanceofrain] = useState("");
  const [maxwind, setMaxwind] = useState("");


  useEffect(()=>{
    setDate(props.data.date);
    setHumidity(props.data.day.avghumidity);
    setMintemperature(props.data.day.mintemp_c);
    setMaxtemperature(props.data.day.maxtemp_c);
    setConditiontext(props.data.day.condition.text);
    setConditionlink(props.data.day.condition.icon);
    setChanceofrain(props.data.day.daily_chance_of_rain);
    setMaxwind(props.data.day.maxwind_kph);
  }, [props]);

  return(
    <StyledDiv>
      <Paragraph>{date}</Paragraph>
      <Paragraph>{humidity}%</Paragraph>
      <Paragraph>{mintemperature} - {maxtemperature} C </Paragraph>
      <Paragraph>{conditiontext}</Paragraph>
      <Paragraph>{chanceofrain}%</Paragraph>
      <Paragraph>{maxwind}km/h</Paragraph>
      <Image src={conditionlink}/>

    </StyledDiv>
  )
}

const Forecast = (props:any) =>{
  const [days, setDays] = useState([]);
  useEffect(()=>{
    if(props.forecast != null){
      setDays(props.forecast.forecastday);
      console.log(props.forecast.forecastday)
    }
  },[props]);

  const StyledDiv = styled.div`
    display:grid;
    grid-row-gap:1rem;

  `

  return(
    <StyledDiv>
      {
        days.map((day:any, index:number)=>{
          return(<WeatherCard key={index} data={day}/>)
        })
      }
    </StyledDiv>
  )
}

export default Forecast;