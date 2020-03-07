import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';


export const Body = styled(Grid).attrs({
    container: true,
})`
    display: flex;
    align-items: center;
    justify-content: center;
    background:  #6fbbd3;
    padding: 5rem;
    color: #fff;
`;
