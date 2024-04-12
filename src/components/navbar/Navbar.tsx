import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navbarTogglerIconStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(224, 224, 224, 1)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`,
  };

  return (
    <nav className="navbar navbar-expand-lg nav-links">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand text-light fs-6" href="/">
            rafaellopes.dev
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={navbarTogglerIconStyle}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                Sobre mim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/services">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
