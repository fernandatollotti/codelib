// Componente User
// Renderiza uma saudação com o nome e o nome completo do usuário.
const User = ({name, fullName}) => {
  return (
    <p>Oiê, {name} {fullName}</p>
  );
} 

export default User;