import React, {useState, useContext, createContext, useEffect} from 'react';
import Axios from "axios";

//Component imports
import Container from './components/layout/Container';
import Content from './components/layout/Content';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import WeatherGrid from "./components/weather/WeatherGrid";
import Current from './components/weather/Current';

const App = () => {
  const [data, setData] = useState();
  const value = getWeather();
  return (
    <Container>
      <Context.Provider value={value}>

        <Navigation/>

          <Content>
            <WeatherGrid/>
          </Content>
        
        {/* <Footer/> */}
      </Context.Provider>
    </Container>
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
  return data;
}

const Context = createContext(getWeather());


export {App, Context};
