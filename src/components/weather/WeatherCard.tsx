import {useState, useEffect} from "react";


const Weather = (props:any) =>{
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
    <div>
      <h1>{temperature}</h1>
      <img src={conditionlink}/>
      <h1>{conditiontext}</h1>
      <h1>{windspeed}</h1>
      <h1>{winddirection}</h1>
      <h1>{humidity}</h1>

    </div>
  )
}

export default Weather;