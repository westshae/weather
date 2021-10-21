//Package imports
import styled from "styled-components";
import {useEffect, useState} from "react"

//Component imports
import Input from "./Input";

//CSS for Navigation Buttons
const Button = styled.button`
    background:transparent;
    color:#F3F5F5;
    border:none;

    transition:  0.25s ease-out;
    font-size:2rem;
`

//CSS for entire navigation bar
const StyledNavigation = styled.nav`
    background-color:#7997c7;
    display:grid;


    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone
        grid-template-columns:1fr;
        margin-left:0%;
        margin-right:0%;
    }

    @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet
        grid-template-columns:1fr;
        margin-left:5%;
        margin-right:5%;
    }

    @media screen and (min-width: 1024px){//Desktop
        grid-template-columns:repeat(2, 1fr);
        margin-left:5%;
        margin-right:5%;
    }
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
    
    useEffect(()=>{//If props updates (props.data), update local data from JSON
        if(props.data != undefined){
            setCityname(props.data.city.cityname);
            setCountryname(props.data.city.countryname);
        }
    }, [props]);
    
    return (
        <StyledNavigation>
            <Input callback={props.callback}/>
            {cityname != "" &&//If data recieved, display
            <Button onClick={() => openInNewTab("https://www.google.com/maps/search/?api=1&query=" + cityname)}>{cityname}, {countryname}</Button>   
            }
        </StyledNavigation>
    )
}

export default Navigation;
