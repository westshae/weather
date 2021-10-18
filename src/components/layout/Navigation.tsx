//Package imports
import styled, {css} from "styled-components";
import MediaQuery from "react-responsive";
import React, {useEffect, useState} from "react"

import {Input} from "./Input";

// import {Context} from "../layout/Input"

//Interface for props
interface Props{
  left?: any;
}


//CSS for Navigation Buttons
const Button = styled.button<Props>`
    background:transparent;
    color:#F3F5F5;
    border:none;
    height:4rem;
    font-size:1.5em;
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
    display:flex;
    margin-left:5%;
    margin-right:5%;
`

//CSS for logo
const Image = styled.img`
    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
            padding-left:1rem;
            padding-right:1rem;
            height:90%;
        
    }
`

//CSS for Navigation Button Container
const StyledDiv = styled.div`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
`

//Prevents bad security, thanks stackoverflow
const openInNewTab = (url:string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {newWindow.opener = null};
}


//Component returned
const  Navigation = (props:any) => {   
    const [cityname, setCityname] = useState("");
    const [countryname, setCountryname] = useState("");
    const [timezone, setTimezone] = useState("");
    const [datetime, setDatetime] = useState("");
    
    useEffect(()=>{
        if(props.data != undefined){
            setCityname(props.data.city.cityname);
            setCountryname(props.data.city.countryname);
            setTimezone(props.data.city.timezone);
            setDatetime(props.data.city.localtime);
        }
    }, [props]);
    
    return (
        <div>
            <StyledNavigation>
                <Input callback={props.callback}/>
                {cityname != "" &&
                <Button onClick={() => openInNewTab("https://www.google.com/maps/search/?api=1&query=" + cityname)}>{cityname}, {countryname}</Button>   
}{datetime != "" &&
                <Button left>{datetime}, {timezone}</Button>
}
            </StyledNavigation>
        </div>
    )
    
}

export default Navigation;
