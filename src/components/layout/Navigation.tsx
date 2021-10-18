//Package imports
import styled, {css} from "styled-components";
import {useEffect, useState} from "react"

//Component imports
import Input from "./Input";

interface Props{//Interface for Button
  left?: any;
}


//CSS for Navigation Buttons
const Button = styled.button<Props>`
    background:transparent;
    color:#F3F5F5;
    border:none;
    font-size:3.5rem;
    font-family:Helvetica;
    margin-left:1rem;
    margin-right:1rem;

    transition:  0.25s ease-out;

    ${props => props.left && css`
        margin-left:auto;
    `};

    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
        :hover{
            background-color: #181b27;
        }
    }
`

//CSS for entire navigation bar
const StyledNavigation = styled.nav`
    background-color:#2E415F;
    height:4rem;
    margin-left:5%;
    margin-right:5%;

    display:grid;
    grid-template-columns:repeat(2, 1fr);
`

//Prevents bad security, thanks stackoverflow
const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {newWindow.opener = null};
}


//Component returned
const  Navigation = (props:any) => {   
    //Stores data from data JSON
    const [cityname, setCityname] = useState("");
    const [countryname, setCountryname] = useState("");
    const [timezone, setTimezone] = useState("");
    const [datetime, setDatetime] = useState("");
    
    useEffect(()=>{//If props updates (props.data), update local data from JSON
        if(props.data != undefined){
            setCityname(props.data.city.cityname);
            setCountryname(props.data.city.countryname);
            setTimezone(props.data.city.timezone);
            setDatetime(props.data.city.localtime);
        }
    }, [props]);
    
    return (
        <StyledNavigation>
            <Input callback={props.callback}/>
            {cityname != "" &&//If data recieved, display
            <Button onClick={() => openInNewTab("https://www.google.com/maps/search/?api=1&query=" + cityname)}>{cityname}, {countryname}</Button>   
            }
            {/* {datetime != "" &&//If data recieved, display
            <Button left>{datetime.split(" ")[0]}</Button>
            } */}
        </StyledNavigation>
    )
}

export default Navigation;
