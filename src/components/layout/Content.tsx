//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar and footer
const Content = styled.div`
    margin:auto;
    margin-left:10%;
    margin-right:10%;
    background-clip:margin-box;
    background-color:#2E415F;
    display:flex;
    flex-direction:column;

    //Mobile support
    @media only screen
    and (max-device-width: 480px){
        margin-left:1rem;
        margin-right:1rem;
    }
    
    
`

export default Content;