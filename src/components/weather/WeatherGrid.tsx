import WeatherCard from "../weather/WeatherCard"
import {useState, useContext} from "react";
import {Context} from "../../App"


const WeatherGrid = () =>{
  const [temperature, setTemperature] = useState(null);
  const [conditiontext, setConditiontext] = useState("");
  const [conditionlink, setConditionlink] = useState("");
  const [windspeed, setWindspeed] = useState(null);
  const [winddirection, setWinddirection] = useState(null);
  const [humidity, setHumidity] = useState(null);


  useContext(Context).then((value:any)=>{
    setTemperature(value.current.temp);
    setConditiontext(value.current.condition.text);
    setConditionlink(value.current.condition.icon);
    setWindspeed(value.current.windspeed);
    setWinddirection(value.current.winddirection);
    setHumidity(value.current.humidity);
  });
 return(
   <div>
     <WeatherCard temperature={temperature} conditiontext={conditiontext} conditionlink={conditionlink} windspeed={windspeed} winddirection={winddirection} humidity={humidity}/>
   </div>
 )
}

export default WeatherGrid;