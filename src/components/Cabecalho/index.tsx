import { Container } from "./style";
import Logozinho from "../../images/PontoLogo.png"

export function Cabecalho(){
    return(
        <Container>
            <img src={Logozinho} alt="Ponto" />
            <div className="botoes">
                <button className="colabButton">Colaborador</button>
                <button>Registrar Ponto</button>
            </div>
        </Container>)
}