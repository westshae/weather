import {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  /* grid-template-rows:repeat(2,1fr); */
  gap:2%;
  background-color:#F3F5F5;
  align-items:center;
  border:none;
  border-radius:1rem;
`

const Paragraph = styled.p`
  font-size:1.5em;
  display:grid;
  background-color:#F3F5F5;
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
    setTemperature(props.temperature);
    setConditiontext(props.conditiontext);
    setConditionlink(props.conditionlink);
    setWindspeed(props.windspeed);
    setWinddirection(props.winddirection);
    setHumidity(props.humidity);
  }, [props]);

  return(
    <StyledDiv>
      <Image src={conditionlink}/>
      <Paragraph>{conditiontext}</Paragraph>
      <Paragraph>{temperature}</Paragraph>
      <Paragraph>{windspeed}</Paragraph>
      <Paragraph>{winddirection}</Paragraph>
      <Paragraph>{humidity}</Paragraph>
    </StyledDiv>
  )
}

export default Current;