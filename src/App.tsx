import React, {useState} from 'react';
import Axios from "axios";

//Component imports
import Container from './components/Container';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container>
      <Navigation/>

      <Content>
        <h1>test</h1>
      </Content>
      
      <Footer/>
    </Container>
  );
}

// const getWeather = async () =>{
//   let data;
//   try{
//     data = await (await Axios.get("http://localhost:5000/weather?location=wellington")).data;
//   }
//   catch(error){
//     console.error(error);
//   }
//   console.log(data);
//   return data;
// }

export default App;
