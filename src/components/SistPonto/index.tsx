import { ReactNode, useState, useEffect } from 'react';
import Notificação from '../../images/mail.svg'
import { Body, Botoes, BotoesLink, Container, Content, Footer, Header, Horario, HorarioObs, HorasCont, HorasTotais, Observacao, RegistrarPonto, Relacoes, Tabela } from './styles';
import SetinhaBaixo from '../../images/chevron-down.svg'
import Entrada from "../../images/log-in.svg"
import Saida from "../../images/log-out.svg"
import Relogio from "../../images/clock.svg"


export function SistPonto() {
  const [data, setData] = useState({
    hora: (new Date()).getHours(),
    minutos: (new Date()).getMinutes(),
    segundos:  (new Date()).getSeconds(),
  })
  
  useEffect(() => {
    setInterval(() => setData({
    hora: (new Date()).getHours(),
    minutos: (new Date()).getMinutes(),
    segundos:  (new Date()).getSeconds(),
    }), 1000)

  }, [])
  
  return (
    <Container>
      <Header>
        <img src={Notificação}  alt="Notificação" />
        <span>(8DOBEM) - Eng. AGIL TELECOMUNICAÇÕES</span>
        <img src={SetinhaBaixo} alt="Setinha" />
      </Header>
      <Content>
        <Body>
          <RegistrarPonto>
            <h1>Registro de Pontos</h1>
            <HorarioObs>
              <Horario>
                <span>Relogio</span>
                <h2>{data.hora}:{data.minutos}:{data.segundos}</h2>
                <span>Sobral/CE</span>
              </Horario>
              <Observacao>
                <span>Observação</span>
                <textarea id="story" name="story"
                rows={5} 
                cols={33}
                placeholder="Observações">
                </textarea>
              </Observacao>
            </HorarioObs>
            <BotoesLink>
              <a href="">Dicas para registrar seus pontos!</a>
              <Botoes>
                <button className="entrada"><img src={Entrada}  alt="Entrada" />   Entrada</button>
                <button className="saida">Saída    <img src={Saida}  alt="Saida" /></button>
              </Botoes>
            </BotoesLink>
          </RegistrarPonto>
          <HorasTotais>
            <Relacoes className="novembro">
              <h3>Novembro 2021</h3>
              <HorasCont>
                <div className="conteudo_hora">
                  <span><img src={Relogio} alt="Relogio" />  Horas Trabalhadas</span>
                  <p>114:10</p>
                </div>
                <div className="conteudo_hora">
                  <span><img src={Relogio} alt="Relogio" />  Horas Previstas</span>
                  <p>104:00</p>
                </div>
              </HorasCont>
            </Relacoes>
            <Relacoes className="outubro">
              <h3>Outubro 2021</h3>
              <HorasCont>
                <div className="conteudo_hora">
                  <span><img src={Relogio} alt="Relogio" />  Horas Trabalhadas</span>
                  <p>114:10</p>
                </div>
                <div className="conteudo_hora">
                  <span><img src={Relogio} alt="Relogio" />  Horas Previstas</span>
                  <p>104:00</p>
                </div>
              </HorasCont>
            </Relacoes>
          </HorasTotais>
        </Body>
        <Footer>
          <h2>Estatisticas Diárias</h2>
          <Tabela>
          {/* <table>
            <thead>
              <th>Data</th>
              <th>Horas Previstas</th>
              <th>Horas Trabalhadas</th>
              <th>Abonos</th>
              <th>Intervalos</th>
              <th>Saldo Horas</th>
            </thead>
            <tbody>
              <td>19/11/2021</td>
              <td>4:00</td>
              <td>3:02</td>
              <td> - </td>
              <td> - </td>
              <td>-0:52</td>
            </tbody>
          </table> */}
          <div className="wrapper">
  <details>
    <summary>
          <span>Data</span>
          <span>Horas Previstas</span>
          <span>Horas Trabalhadas</span>
          <span>Abonos</span>
          <span>Intervalos</span>
          <span>Saldo</span>
    </summary>

    <div className="conteudo">
      <span>19/11/2021</span>
      <span>4:00</span>
      <span>3:53</span>
      <span>-</span>
      <span>-</span>
      <span>-0:07</span>
    </div>
  </details>
</div>
          </Tabela>
        </Footer>
      </Content>
    </Container>
  );
};
