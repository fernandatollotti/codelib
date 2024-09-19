import './Title.css';

// Componente Title
// Renderiza um título (h2) com conteúdo passado como filho (children).
const Title = ({children}) => {
  return (
    <h2 className="title">{children}</h2>
  );
}

export default Title;