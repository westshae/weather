import {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:grid;
  grid-template-rows:2fr 8fr;
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  box-shadow: 5px 5px 5px #202020;
  -moz-box-shadow: 5px 5px 5px #202020;
  -webkit-box-shadow: 5px 5px 5px #202020;
  -o-box-shadow: 5px 5px 5px #202020;
  border-radius:0.5rem;
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
  margin-left:auto;
  height:100%;
`

const Header = styled.div`
  display:flex;
`

const H1 = styled.h1`
  padding:none;
  padding-left:1rem;
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

const Current = (props:any) =>{
  //Locally store variables
  const [temperature, setTemperature] = useState("");
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moonphase, setMoonphase] = useState("");

  


  useEffect(()=>{//If props update, update local variables
    if(props.current != null && props.astrology != null){
      setTemperature(props.current.temp);
      setConditiontext(props.current.condition.text);
      setConditionlink(props.current.condition.icon);
      setWindspeed(props.current.windspeed);
      setHumidity(props.current.humidity);
      setMoonphase(props.astrology.moon_phase);
    }
  }, [props]);

  return(
    <div>
      {conditionlink != "" &&//If data exists, display it
      <StyledDiv>
        <Header>
        <H1>Weather Information</H1>
        <Image src={conditionlink}/>

      </Header>
        {/* <Image src={conditionlink}/> */}
          <Table>
            <TR>
              <TD>Condition</TD>
              <TD>{conditiontext}</TD>
            </TR>
            <TR>
              <TD>Temperature</TD>
              <TD>{temperature} C</TD>
            </TR>
            <TR>
              <TD>Wind</TD>
              <TD>{windspeed}km/h</TD>
            </TR>
            <TR>
              <TD>Humidity</TD>
              <TD>{humidity}%</TD>
            </TR>
            <TR>
              <TD>Date</TD>
              <TD>Realtime</TD>
            </TR>
          </Table>
      </StyledDiv>
      }
    </div>
  )
}

export default Current;