import Title from '../Title/Title';
import Book from '../Book/Book';
import './Books.css';

// Componente Books
// Renderiza uma lista de livros recomendados usando o componente Book.
// Os dados dos livros estão armazenados em um array de objetos, cada um contendo título, autor e imagem.
const Books = () => {
  const books = [
    {
      name: "Código Limpo",
      author: "Robert Cecil Martin",
      image: "https://m.media-amazon.com/images/I/71JpZHEGvWL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "O Codificador limpo",
      author: "Robert Cecil Martin",
      image: "https://m.media-amazon.com/images/I/91lBONZ4tAL._AC_UF350,350_QL50_.jpg"
    },
    {
      name: "Entendo algoritmos",
      author: "Aditya Y. Bhargava",
      image: "https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "O universo da programação",
      author: "William Oliveira",
      image: "https://m.media-amazon.com/images/I/41WQNOs8j5L._SY580_.jpg"
    },
    {
      name: "Primeiros passos com React ",
      author: "Stoyan Stefanov",
      image: "https://m.media-amazon.com/images/I/71HiBCG2WsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "Design Para Quem Não é Designer",
      author: "Robin Williams",
      image: "https://m.media-amazon.com/images/I/51GbSoyozSL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "Não me faça pensar",
      author: "Steve Krug",
      image: "https://m.media-amazon.com/images/I/51i8-f+QMFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "Roube como um artista",
      author: "Austin Kleon",
      image: "https://m.media-amazon.com/images/I/51lI9is-gnL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "Domain Driven Design",
      author: "Eric Evans",
      image: "https://m.media-amazon.com/images/I/61aIS4n2jZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "O programador apaixonado",
      author: "Chad Fowler",
      image: "https://m.media-amazon.com/images/I/81dBiDT7qTL._UF894,1000_QL80_.jpg"
    }
  ];

  return(
    <section className="books">
      <Title>Livros recomendados</Title>
      <ul className="books_list">
        {books.map((book, index) => (
          <Book book={book} key={index}/>
        ))}
      </ul>
    </section>
  );
}

export default Books;