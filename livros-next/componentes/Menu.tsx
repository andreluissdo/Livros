
export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span onClick={() => window.location.href = '/'} className="navbar-brand">Home</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span onClick={() => window.location.href = '/LivroLista'} className="nav-link">Lista de Livros</span>
            </li>
            <li className="nav-item">
              <span onClick={() => window.location.href = '/LivroDados'} className="nav-link">Dados do Livro</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
