import './Book.css';

// Componente Book
// Renderiza informações de um livro (imagem, título e autor) em um item de lista.
const Book = ({book}) => {
  return(
    <li className="book_item">
      <img src={book.image} alt={book.name} />
      <h3>{book.name}</h3>
      <p><b>Author:</b> {book.author}</p>
    </li>
  );
}

export default Book;