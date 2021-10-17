import {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:grid;
  grid-template-rows:repeat(6, 1fr);
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  border-radius:1rem;

  box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
  -moz-box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
  -o-box-shadow: 5px 5px 5px rgba(0,0,0,0.6);
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
  const [maxwind, setMaxwind] = useState("");


  useEffect(()=>{
    setDate(props.data.date);
    setHumidity(props.data.day.avghumidity);
    setMintemperature(props.data.day.mintemp_c);
    setMaxtemperature(props.data.day.maxtemp_c);
    setConditiontext(props.data.day.condition.text);
    setConditionlink(props.data.day.condition.icon);
    setMaxwind(props.data.day.maxwind_kph);
  }, [props]);

  return(
    <StyledDiv>
      <Image src={conditionlink}/>
      <Paragraph>Condition: {conditiontext}</Paragraph>
      <Paragraph>Temperature: {mintemperature} - {maxtemperature} C </Paragraph>
      <Paragraph>Wind: {maxwind}km/h</Paragraph>
      <Paragraph>Humidity: {humidity}%</Paragraph>
      <Paragraph>Date: {date}</Paragraph>

    </StyledDiv>
  )
}

const Forecast = (props:any) =>{
  const [days, setDays] = useState([]);
  useEffect(()=>{
    if(props.forecast != null){
      setDays(props.forecast.forecastday);
    }
  },[props]);

  const StyledDiv = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-column-gap:1rem;

  


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