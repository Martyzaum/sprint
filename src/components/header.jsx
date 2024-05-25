import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div id="logoContainer">
        <img id="logo" src={logo} alt="Logo" className="img-fluid" />
      </div>
      <nav id="navContainer" className="d-flex justify-content-around">
        <a href="/" className="text-white">
          Inicio<span className="bar"></span>
        </a>
        <a href="/agendamento" className="text-white">
          Agendamento<span className="bar"></span>
        </a>
        <a href="/exames" className="text-white">
          Meus exames<span className="bar"></span>
        </a>
        <a href="/resultados" className="text-white">
          Resultados<span className="bar"></span>
        </a>
        <a href="/contato" className="text-white">
          Contato<span className="bar"></span>
        </a>
        <a href="/localizacao" className="text-white">
          Como Chegar<span className="bar"></span>
        </a>
        <p className="text-white">Bem Vindo, Leonardo</p>
      </nav>
    </header>
  );
};

export default Header;
