export default function Footer() {
  return (
    <footer className="text-light py-5">
      <div className="container">
        <div className="row align-items-center mx-md-0 mx-1">
          <div className="col-md-4 text-md-start mb-3">
            <p className="mb-2">+55 (62) 99213-6842</p>{" "}
            <p>rafaelopes.dev@gmail.com</p>
          </div>
          <div className="text-md-start mb-3 mb-md-0">
            <p className="mb-2">
              <a href="#" className="text-decoration-none text-light">
                Termos de Serviços
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-light">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-12 text-md-center text-center mx-0 ms-0 mt-md-5 mt-5">
          <p className="mb-0">&#169;2024 Desenvolvido por rafaellopes.dev</p>
        </div>
        <div className="col-md-7 ms-3 text-center text-md-end mt-2 mb-0">
          <p>
            <a href="#" className="text-decoration-none me-2">
              GitHub
            </a>{" "}
            .{" "}
            <a href="#" className="text-decoration-none mx-2">
              LinkedIn
            </a>{" "}
            .{" "}
            <a href="#" className="text-decoration-none ms-2">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
