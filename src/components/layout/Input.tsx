import {useState, createContext, useEffect} from "react";
import Axios from "axios";

let auto = "New York";
const getWeather = async () =>{
  let data;
  try{
    data = await (await Axios.get("http://localhost:5000/weather?location=" + auto)).data;
  }
  catch(error){
    console.error(error);
  }
  return data;
}

const Input = (props:any) =>{
  const [value, setValue] = useState("");

  getWeather().then((value:any)=>{
    props.callback(value);
  })
  
  const handleChange = (event:any) => {    
    setValue(event.target.value);  
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    getWeather().then((value:any)=>{
      props.callback(value);
    })
  }

  useEffect(()=>{
    auto = value;
  },[value]);


  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
}




export {Input};