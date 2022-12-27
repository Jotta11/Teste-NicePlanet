import { Container, Content } from './styles';
import logo from '../../assets/images/logo.png'


export function Header() {
  return (
    <Container>
      <Content>
        <div className="pageDetails">
          <h1>Registros</h1>
          <h2>Acompanhe os monitoramentos</h2>

        </div>

        <img src={logo} alt='Logo NP' />
      </Content>

    </Container>
  );
}