import './Input.css';

// Componente Input
// Renderiza um campo de entrada com um rótulo associado.
// Recebe `content` para o texto do rótulo e outras props para o campo de entrada.
const Input = ({content, ...props}) => {
  return(
    <div className="group_input">
      <label htmlFor={props.id}>{content}</label>
      <input type={props.type} />
    </div>
  );
}

export default Input;