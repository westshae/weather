import {useState} from "react";
import styled from "styled-components";
import Axios from "axios";

const Form = styled.form`
  display:flex;
`

const InputButton = styled.input`
  height:100%;
  width:fit-content;
  border:none;
  /* padding:0 1rem 0 1rem; */
  padding:0 0 0 0;
  /* background-color:#179717; */
  outline:none;
  @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone
        padding-left:1rem;
        padding-right:1rem;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
        font-size:1.5rem;

  }
  
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet
  
  }
  
  @media screen and (min-width: 1024px){//Desktop

  }
`

const InputText = styled.input`
  height:100%;
  width:100%;
  border:none;
  outline:none;
  padding:0 0 0 0;

  @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone
        font-size:1.5rem;
      }
  
      @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet
  
      }
  
      @media screen and (min-width: 1024px){//Desktop
  
      }
`

const Input = (props:any) =>{
  const [location, setLocation] = useState("");//Stores text of input text box
  
  const handleChange = (event:any) => {//When input text box is edited, update location
    setLocation(event.target.value);  
  }

  const handleSubmit = (event:any) => {//On submitting, Return getWeather data
    event.preventDefault();
    if(location != ""){//If location has value
      //Get backend data then return via callback
      getWeather().then((value:any)=>{
        props.callback(value);
      })
    }
  }

  //Gets location weather data from backend
  const getWeather = async () =>{
    let data;
    try{
      data = await (await Axios.get("http://localhost:5000/weather?location=" + location)).data;//Waits for results, then returns weather in single JSON
    }
    catch(error){
      console.error(error);
    }
    return data;
  }

  return(
    <Form onSubmit={handleSubmit}>
      <InputText type="text" value={location} onChange={handleChange} />
      <InputButton type="submit" value="Submit" />      
    </Form>
  );
}


export default Input;