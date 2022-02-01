import styled from 'styled-components';

export const Container = styled.div`
    padding-left: 7rem;
    min-height: 100vh;
    background-color: whitesmoke;
`;

export const Header = styled.header`
    background-color: white;
    height: 5rem;
    justify-content: right;
    align-items: center;
    display: flex;
    border-bottom: 1px solid black;
    padding-right: 1rem;
    
    span{
        margin-left: 1.5rem;
        margin-right: 0.2rem;
        opacity: 0.9;
    }
    img{
        opacity: 0.6;
    }
`;

export const Content = styled.div`
    padding: 0.7rem 1.5rem;

`
export const Body = styled.main`
    height: 22.5rem;
    display: flex;
    flex-direction: row;
`;

export const Footer = styled.footer`
    background-color: white;
    height: 22.5rem;

    h2{
        font-weight: 400;
        padding: 1.3rem 0 1.7rem 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        
        margin: 0 2rem;
    }
`;



export const RegistrarPonto = styled.div`
    width: 65%;
    background-color: white;
    height: 21.5rem;
    margin-right: 1rem;
    h1{
        padding: 1.3rem 0.5rem;
        font-size: 1.6rem;
        font-weight: 400;
        border-bottom: 1px solid black;
        margin: 0 2rem;
    }
`
export const HorasTotais = styled.div`
    width: 35%;
    height: 21.5rem;
`
export const HorarioObs = styled.div`
    width: 100%;
    background-color: white;
    height: 8rem;
    display: flex;
`
export const BotoesLink = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;

    a{
        text-decoration: none;
        margin-left: 1.5rem;
        margin-top: 13%;
        height: 10%;
    }
`
export const Relacoes = styled.div`
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        padding: 0.5rem 0;
    }
`
export const Tabela = styled.div`
    margin-top: 1.7rem;
    width: 100%;
    height: 13rem;
    
    h1{
        padding: 1.3rem 0 0 2.5rem;
    }

    .wrapper {
        display: flex;
        color: #fff;
        width: 100%;
    }

    details {
        width: 100% ;
        height: 10rem;
        border: 1px solid black;
    }

    summary {
        display: flex;
        background: blue;
        cursor: pointer;
        width: 100%;
        padding: 1rem 0 1rem 0;
        justify-content: center;
        align-items: center;
    }
    span{
        flex: 1;
        :first-child{
        }
    }
    .conteudo{
        justify-content: center;
        align-items: center;
        color: black;
        display: flex;
        width: 100%;
    }

`
export const Horario = styled.div`
    width: 40%;
    background-color: white;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 2rem;
    }
`
export const Observacao = styled.div`
    width: 60%;
    background-color: white;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0 1rem;

    h2{
        font-size: 2rem;
    }
    textarea{
        margin-top: 0.5rem;
    }
`
export const Botoes = styled.div`
    margin-left: 16rem;
    margin-top: 1rem;
    display: flex;
    button{
        width: 6rem;
        height: 2rem;
        border-radius: 10rem;
        border: 0;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;
        transition: filter 0.2s;
        cursor: pointer;

        :hover{
            filter: brightness(0.8);
        }
    }
    .entrada{
            background-color: #7cd68b;
        }
    .saida{
        background-color: #f23a3e;
    }

`
export const HorasCont = styled.div`
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: row;

    .conteudo_hora{
        width: 50%;
        display: flex;
        flex-direction: column;
        height: 6.6rem;
        justify-content: center;
        align-items: center;

        img{
            width: 1rem;
            height: 1rem;
        }
        p{
            font-size: 2.5rem;
            font-weight: 550;
        }
    }
`

