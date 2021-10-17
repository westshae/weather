import {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:grid;
  grid-template-rows:1fr;
  margin-left:10%;
  margin-right:10%;
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


const Current = (props:any) =>{
  const [temperature, setTemperature] = useState("");
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [winddirection, setWinddirection] = useState("");
  const [humidity, setHumidity] = useState("");




  useEffect(()=>{
    if(props.current != null){
      setTemperature(props.current.temp);
      setConditiontext(props.current.condition.text);
      setConditionlink(props.current.condition.icon);
      setWindspeed(props.current.windspeed);
      setWinddirection(props.current.winddirection);
      setHumidity(props.current.humidity);
    }
  }, [props]);

  return(
    <div>
      <StyledDiv>
        <Image src={conditionlink}/>
        <Paragraph>Conditions: {conditiontext}</Paragraph>
        

        <Paragraph>Temperature: {temperature} C</Paragraph>
        <Paragraph>Wind speed: {windspeed}km/h {winddirection}</Paragraph>
        <Paragraph>Humidity: {humidity}%</Paragraph>
      </StyledDiv>
      <StyledDiv>
      </StyledDiv>
    </div>
  )
}

export default Current;