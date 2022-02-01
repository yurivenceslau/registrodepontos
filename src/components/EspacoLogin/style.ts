import styled from "styled-components"

export const Container = styled.main`
    color: #fffdfe;
    display: flex;
    flex-direction: column;
    width: 30rem;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 1rem 0;
    border-top: 0.1rem solid white;
    border-bottom: 0.1rem solid white;

`
export const Content = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin-bottom: 0.7rem;
        background-color: white;
        border: 0;
        height: 2.2rem;
        width: 20rem;
        border-radius: 0.25rem;
        text-align: center;
    }
    button{
        background-color: white;
        border: 0;
        border-radius: 0.25rem;
        height: 2.2rem;
        width: 10rem;
        margin-bottom: 0.7rem;
        cursor: pointer;
        transition: filter 0.2s;

        :hover{
            filter: brightness(0.9);
        }
    }
    a{
        margin: 0.5rem;
        font-size: 0.83rem;
        color: white;
        font-weight: 510;
    }


`
export const Info = styled.span`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.7rem;
    align-items: center;
    font-size: 0.83rem;
    font-weight: 510;

    img{
        margin-left: 0.2rem;
    }

`