import { ReactNode } from 'react';
import Dardo from '../../images/MiniFoto.png'
import { Container } from './styles'; 
import Recarga from '../../images/reload.png'
import Editar from "../../images/edit.svg"

export function NavBar() {
  return (
    <Container>
      <img src={Dardo} alt="Dardo" className="dardo" />
      <img src={Editar} alt="Editar" className="editar" />
      <img src={Recarga} alt="Recarga" className="recarga"/>
    </Container>
  );
};
