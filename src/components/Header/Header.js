import './Header.css';
import logo from '../../logo.png';
import User from '../User/User';

// Componente Header
// Renderiza o cabeçalho da página com um logo e informações do usuário.
const Header = ({text}) => {
  return (
    <header className="header">
      <h1><img src={logo} alt={text}/></h1>
      <User name="Ivo" fullName="Soares"/>
    </header>
  );
}

export default Header;