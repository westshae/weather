import {useState} from 'react';

//Component imports
import Container from './components/layout/Container';
import Content from './components/layout/Content';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import WeatherGrid from "./components/weather/WeatherGrid";

const App = () => {
  const [data, setData] = useState();//Stores weather JSON data

  return (
    <Container>
        <p/>
        <Navigation data={data} callback={setData}/>
        <p/>
          <Content>
            <WeatherGrid data={data}/>
          </Content>
        <p/>
        <Footer/>
    </Container>
  );
}

export {App};
