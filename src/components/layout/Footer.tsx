//Package imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

//CSS for footer
const StyledFooter = styled.div`
    height:5rem;
    background-color:#7997c7;
    display:flex;
    justify-content:center;
    align-items:center;

    //Mobile
    @media only screen
    and (orientation: portrait)
    and (max-device-width: 480px){
        display:grid;
        height:10rem;
    }
`

//CSS for Footer text
const Paragraph = styled.p`
    text-align:center;
    color:#F3F5F5;
    font-size:1.25em;

    margin:0.75rem;
`

//CSS for anchor text
const Anchor = styled.a`
    color:#F3F5F5;
    height:auto;
`

const Image = styled.img`
    //Desktop
    @media only screen 
    and (min-device-width: 1025px){
        :hover{
            opacity:0.7;
        }
    }

`

//Component returned
const Footer = () =>{
    return(
        <StyledFooter>
            <Paragraph>Application created by github.com/westshae</Paragraph>

            {/* Desktop */}
            <MediaQuery minWidth={480}>
                <Anchor href="https://github.com/vecnz/vecnz.github.io" target="_blank">github.com/westshae</Anchor>
            </MediaQuery>
            

        </StyledFooter>
    )
}

export default Footer;