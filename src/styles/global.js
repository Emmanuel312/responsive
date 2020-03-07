import { createGlobalStyle} from 'styled-components';


const globalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    *
    {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    *:focus{
        outline: 0;
    }
    html,body,#root{
        height: 100%;
    }
    html
    {
        font-size: 62.5%; /* 1rem = 10px */
    }
    body{
        -webkit-font-smoothing: antialised;
    }
    input
    {
        border: 0;
    }
    body,input,button
    {
        font-family: 'Roboto', sans-serif;
    }
    a
    {
        text-decoration: none
    }
    li
    {
        list-style: none;
    }
    button
    {
        cursor: pointer;
        background: none;
        border: 0;
    } 
    @media (max-width : 600 ) {
        html
        {
            font-size: 30%; /* 1rem = 10px */
        }
    }
`

export default globalStyles