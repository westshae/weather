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

  // getWeather().then((test:any)=>{
  //   console.log("WOT")
  //   console.log(test);
  //   props.callback(test);
  // })
  // props.callback(getWeather());
  // console.log(getWeather());

  
  const handleChange = (event:any) => {    
    setValue(event.target.value);  
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    getWeather().then((test:any)=>{
      props.callback(test);
    })
  }

  useEffect(()=>{
    auto = value;
  },[value]);


  return(
    <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea value={value} onChange={handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
  );
}




export {Input};