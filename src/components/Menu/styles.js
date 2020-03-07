import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { darken } from 'polished';

export const Container = styled(Grid).attrs({
    container: true,
   
})`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 600px) {
        padding: 1rem;
    }
`;

export const Content = styled(Grid).attrs({
    container: true,
})`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Logo = styled(Grid).attrs({
    item: true
})`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
`;

export const List = styled(Grid).attrs({
    item: true
})`
  
    display: flex;
    align-items: center;
    justify-content: center;

   

    ul
    {
        display: flex;
        align-items: center;
        justify-content: center;
        li 
        {
            padding: 2rem;
            color: #808080;
            font-size: 1.6rem;
            transition: background 0.6s, color 0.6s;
            border-bottom: 0.5rem solid #fff;
            &:hover
            {
                background: #6fbbd3;
                border-bottom: 0.5rem solid ${darken(0.35,'#6fbbd3')};
                color: #fff;
            }
        }
    }    
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ul
        {
            display: flex;
            flex-direction: column;
            z-index: 0;
        }
    }
`;

export const Button = styled(Grid).attrs({
    item: true
})`
        display: flex;
        align-items: center;
        justify-content: center;
   
    button
    {
        background: #ff9800;
        padding: 0.5rem 2rem;
        color: #fff;
        border-radius: 0.2rem;
    }
`;