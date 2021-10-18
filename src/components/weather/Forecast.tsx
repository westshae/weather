import {useState, useEffect} from "react";
import styled from "styled-components";
import Current from "./Current";

const StyledDiv = styled.div`
  display:grid;
  grid-template-rows:repeat(6, 1fr);
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  border-radius:1rem;

  box-shadow: 5px 5px 5px #202020;
  -moz-box-shadow: 5px 5px 5px #202020;
  -webkit-box-shadow: 5px 5px 5px #202020;
  -o-box-shadow: 5px 5px 5px #202020;
  border-radius:1rem;
`

// const Paragraph = styled.p`
//   font-size:1.5em;
//   display:grid;
//   color:#312E3D;
//   justify-content:center;
//   align-items:center;
//   white-space:nowrap;
// `
const Table = styled.table`

`

const TR = styled.tr`

`

const TD = styled.td`

`

const Image = styled.img`
  display:grid;
  
  justify-content:center;
  align-items:center;
  margin-left:auto;
  margin-right:auto;
`


const WeatherCard = (props:any) =>{
  //Stores JSON data locally in component
  const [date, seTDate] = useState("");
  const [humidity, setHumidity] = useState("");
  const [mintemperature, setMintemperature] = useState("");
  const [maxtemperature, setMaxtemperature] = useState("");
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [maxwind, setMaxwind] = useState("");


  useEffect(()=>{//If props updates, update local variables
    seTDate(props.data.date);
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
    grid-template-columns:repeat(4, 1fr);
    grid-column-gap:1rem;
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