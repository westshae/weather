import React, {useState, useContext} from "react";

import {Context} from "../../App"


const Weather = (props:any) =>{
  const [temperature, setTemperature] = useState("");
  const [condition, setCondition] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [winddirection, setWinddirection] = useState("");
  const [humidity, setHumidity] = useState("");


  useContext(Context).then((value:any)=>{
    setTemperature(props.temperature);
    setCondition(props.condition);
    setWindspeed(props.windspeed);
    setWinddirection(props.winddirection);
    setHumidity(props.humidity);
});

  return(
    <div>
      <h1>{temperature}</h1>
      <h1>{condition}</h1>
      <h1>{windspeed}</h1>
      <h1>{winddirection}</h1>
      <h1>{humidity}</h1>

    </div>
  )
}

export default Weather;