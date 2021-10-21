import {useState, useEffect} from "react";
import styled from "styled-components";
import Current from "./Current";

const StyledDiv = styled.div`
  display:grid;
  grid-template-rows:2fr 8fr;
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  border-radius:0.5rem;

  box-shadow: 5px 5px 5px #202020;
  -moz-box-shadow: 5px 5px 5px #202020;
  -webkit-box-shadow: 5px 5px 5px #202020;
  -o-box-shadow: 5px 5px 5px #202020;
`

const Table = styled.table`
border-collapse:collapse;
height:90%;
`

const TR = styled.tr`

:nth-child(odd){
    background-color:#d4ebf2;
  }
`

const TD = styled.td`
  font-size:120%;
  text-align:center;

`

const Image = styled.img`
  display:grid;
  margin-left:auto;
  height:100%;
`

const Header = styled.div`
  display:flex;
`

const H1 = styled.h1`
  padding:none;
  /* padding-left:1rem; */
`


const WeatherCard = (props:any) =>{
  //Stores JSON data locally in component
  const [date, setDate] = useState("");
  const [humidity, setHumidity] = useState("");
  const [mintemperature, setMintemperature] = useState("");
  const [maxtemperature, setMaxtemperature] = useState("");
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [maxwind, setMaxwind] = useState("");


  useEffect(()=>{//If props updates, update local variables
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
      <Header>
        <H1>Weather Information</H1>
        <Image src={conditionlink}/>

      </Header>
      <Table>
        <TR>
          <TD>Condition</TD>
          <TD>{conditiontext}</TD>
        </TR>
        <TR>
          <TD>Temperature</TD>
          <TD>{mintemperature} - {maxtemperature} C</TD>
        </TR>
        <TR>
          <TD>Wind</TD>
          <TD>{maxwind}km/h</TD>
        </TR>
        <TR>
          <TD>Humidity</TD>
          <TD>{humidity}%</TD>
        </TR>
        <TR>
          <TD>Date</TD>
          <TD>{date}</TD>
        </TR>
      </Table>
    </StyledDiv>
  )
}

const Forecast = (props:any) =>{
  const [days, setDays] = useState([]);//Stores all forecast days

  useEffect(()=>{//If props data updates, update local variables
    if(props.forecast != null){
      setDays(props.forecast.forecastday);
    }
  },[props]);

  const StyledDiv = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-column-gap:3rem;
    grid-row-gap:3rem;
    @media screen and (min-width: 1024px){//Desktop
    grid-template-columns:repeat(4, 1fr);
    }
  `

  return(
    <StyledDiv>
      <Current current={props.current} astrology={props.astrology}/>
      {//For each day of data, display
        days.map((day:any, index:number)=>{
          return(<WeatherCard key={index} data={day}/>)
        })
      }
    </StyledDiv>
  )
}

export default Forecast;