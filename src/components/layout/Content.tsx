//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar and footer
const Content = styled.div`
    margin:auto;
    margin-left:5rem;
    margin-right:5rem;
    background-clip:margin-box;
    background-color:#2E415F;
    display:flex;
    flex-direction:column;
    @media screen and (max-device-width: 480px) and (orientation: portrait){//Phone
        margin:1rem;
    }

`

export default Content;