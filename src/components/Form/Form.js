import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Form.css';

// Componente Form
// Renderiza um formulário de contato com campos para nome e email, 
// além de um botão de envio.
const Form = () => {
  return(
    <section className="contact">
      <form className="form">
        <Title>Vamos conversar?</Title>
        <Input content="Nome" type="text" id="name"/>
        <Input content="E-mail" type="email" id="email"/>
        <Button content="Enviar" type="button" />
      </form>
    </section>
  );
}

export default Form;