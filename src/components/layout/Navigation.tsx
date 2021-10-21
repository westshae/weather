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
    /* font-size:3.5rem; */
    /* font-family:Helvetica; */
    /* margin-left:1rem; */
    /* margin-right:1rem; */

    transition:  0.25s ease-out;

    /* ${props => props.left && css`
        margin-left:auto;
    `}; */

    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone
        
    }

    @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet

    }

    @media screen and (min-width: 1024px){//Desktop

    }
`

//CSS for entire navigation bar
const StyledNavigation = styled.nav`
    background-color:#2E415F;
    /* height:4rem; */
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


    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone

    }

    @media screen and (min-device-width: 768px) and (max-device-width: 1024px){//Tablet

    }

    @media screen and (min-width: 1024px){//Desktop

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
