import React, {useState} from 'react';
import Axios from "axios";

const App = () => {
  getWeather();
  return (
    <div>
      <h1>{
      }</h1>
    </div>
  );
}

const getWeather = async () =>{
  let data;
  try{
    data = await (await Axios.get("http://localhost:5000/weather?location=wellington")).data;
  }
  catch(error){
    console.error(error);
  }
  console.log(data);
  return data;
}

export default App;
