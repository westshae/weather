import React, {useState, useContext, createContext, useEffect} from 'react';

//Component imports
import Container from './components/layout/Container';
import Content from './components/layout/Content';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import WeatherGrid from "./components/weather/WeatherGrid";
import {Input} from "./components/layout/Input";

const App = () => {
  const [data, setData] = useState();
  
  return (
    <Container>
        <Navigation/>
          <Content>
            <Input callback={setData}/>
            <WeatherGrid data={data}/>
          </Content>
        <p/>
        <Footer/>
    </Container>
  );
}

export {App};
