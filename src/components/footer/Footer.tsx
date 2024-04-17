export default function Footer() {
  return (
    <footer className="text-light py-5 text-align-center footer-main-container">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-md-start">
            <p className="mb-2 fs-5">+55 (62) 99213-6842</p>
            <p className="fs-5">rafaelopes.dev@gmail.com</p>
          </div>
          <div className="col-12 col-md-8 text-md-end text-sm-start">
            <p className="mb-2 fs-5">
              <a href="#" className="text-decoration-none text-light">
                Termos de Serviços
              </a>
            </p>
            <p className="fs-5">
              <a href="#" className="text-decoration-none text-light">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center my-2 mt-5">
            <p className="mb-0">&#169;2024 Desenvolvido por rafaellopes.dev</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>
              <a href="#" className="text-decoration-none me-2">
                GitHub
              </a>
              .
              <a href="#" className="text-decoration-none mx-2">
                LinkedIn
              </a>
              .
              <a href="#" className="text-decoration-none ms-2">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
