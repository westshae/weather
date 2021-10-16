//Package imports
import styled, {css} from "styled-components";
import MediaQuery from "react-responsive";
import React from "react"

//Interface for props
interface Props{
  left?: any;
}


//CSS for Navigation Buttons
const Button = styled.button<Props>`
    background:transparent;
    color:#f8f8ff;
    border:none;
    height:4rem;
    font-size:1.5em;
    font-family:Helvetica;

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
    background-color:#28375d;
    height:4rem;
    display:flex;
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
    if (newWindow) newWindow.opener = null
}




//Component returned
const  Navigation = () => {
  var PLACENAME = "Napier";
    return (
        <div>
            <StyledNavigation>
                <Button onClick={() => openInNewTab("https://www.google.com/maps/search/?api=1&query=" + PLACENAME)}>PLACENAME, COUNTRYNAME</Button>   
                <Button left>CURRENT DATE, TIMEZONE</Button>
            </StyledNavigation>
        </div>
    )
    
}

export default Navigation;