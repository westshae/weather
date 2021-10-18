import {useState, useEffect} from "react";
import styled from "styled-components";
import Axios from "axios";

const Form = styled.form`
  vertical-align:center;
  align-items:center;
  height:100%;
  width:100%;
`

const InputButton = styled.input`
  vertical-align:center;
  align-items:center;

  height:100%;
  border:0;
  padding:0 0 0 0 ;
  margin:0 0 0 0;
  outline:none;
  width:15%;
`

const InputText = styled.input`
  vertical-align:center;
  align-items:center;

  height:100%;
  border:0;
  outline:none;
  padding:0 0 0 0;
  width:85%;
  /* font-size:100%; */

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
    if(auto != ""){
      getWeather().then((value:any)=>{
        props.callback(value);
      })
    }
    
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