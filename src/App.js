import './App.css';
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

// Componente App
// Renderiza a estrutura principal da aplicação, incluindo o cabeçalho, lista de livros, formulário de contato e rodapé.
function App() {
  return (
    <>
      <Header text="Logo do CodeLib"/>
      <div className="container">
        <Books/>
        <Form/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
