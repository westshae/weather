import {useState, useEffect} from "react";
import styled from "styled-components";
import Axios from "axios";

const Form = styled.form`
`

const InputButton = styled.input`
  height:100%;
`

const InputText = styled.input`
  height:100%;
`

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
    <Form onSubmit={handleSubmit}>
      <InputText type="text" value={value} onChange={handleChange} />
      <InputButton type="submit" value="Submit" />
    </Form>
  );
}




export {Input};