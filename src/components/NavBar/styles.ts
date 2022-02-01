import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    min-height: 100vh;
    background-image: linear-gradient( to right bottom,#ff73af, #ff2483);
    width: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover{
        width: 10rem;
    }
    

    .editar{
        width: 30%;
        height: 30%;
        padding: 0.5rem;
        margin-top: 7rem;
    }
    .dardo{
        width: 80%;
        height: 80%;
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
    .recarga{
        width: 30%;
        height: 30%;
        padding: 0.5rem;
        margin-top: 1.5rem;
    }
`;
