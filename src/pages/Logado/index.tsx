import { ReactNode } from 'react';
import { NavBar } from '../../components/NavBar';
import { SistPonto } from '../../components/SistPonto';

import { Container } from './styles';

export function Logado() {
  return (
    <Container>
      <NavBar/>
      <SistPonto/>
    </Container>
  );
};
