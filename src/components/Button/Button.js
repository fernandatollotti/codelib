import './Button.css';

// Componente Button
// Renderiza um botão com conteúdo e tipo passadas como props.
const Button = ({content, ...props}) => {
  return(
    <button type={props.type} className='btn'>{content}</button>
  );
}

export default Button;