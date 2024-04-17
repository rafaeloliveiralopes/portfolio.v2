import React from "react";
import Image from "next/image";
import ContactForm from "../components/form/ContactForm";

export default function Home() {
  return (
    <main>
      <section className="container-fluid text-center">
        <h1 className="greetings fs-5 px-4">
          Olá! Sou Desenvolvedor Web Full Stack
        </h1>
        <div className="mx-auto" style={{ maxWidth: "95%" }}>
          <p className="fs-6 my-3 text-start">
            Com expertise em tecnologias de ponta e uma abordagem personalizada,
            estou aqui para elevar sua presença online e trazer resultados
            tangíveis para o seu negócio. Vamos construir algo incrível juntos.
          </p>
          <div className="d-flex pb-5">
            <button className="btn-custom">Conheça meus serviços</button>
          </div>
        </div>
        <div className="image-container mt-4">
          <Image
            src="/desenvolvedor-fullstack-trabalhando-no-desktop.jpg"
            alt="Desenvolvedor Full Stack trabalhando em um projeto com seu desktop."
            width={250}
            height={250}
            layout="intrinsic"
            className="rounded-3 shadow-sm"
          />
        </div>
        <p className="gradient-paragraph fs-2 fw-bold my-3 pb-5">
          Faço suas idéias ganhar vida!
        </p>
      </section>
      <section
        className="container-fluid bg-about py-4 text-center"
        style={{ backgroundColor: "#609085" }}
      >
        {/* About me section */}
        <h2 className="fs-1 my-4">Sobre mim</h2>
        <div className="my-4">
          <Image
            src="/rafael-desenvolvedor-full-stack.jpg"
            alt="Foto do Desenvolvedor Full Stack, Rafael Lopes de perfil e olhando para cima . Ele está usando camiseta cinza clara, camisa xadrez com tons de verde escuro e preto e calça preta. O Desenvolvedor Rafael Lopes é um homem negro de cabelos e olhos pretos"
            width={195}
            height={200}
            style={{ borderRadius: "39px" }}
            layout="intrinsic"
            className="shadow-sm"
          />
        </div>
        <div className="mx-auto">
          <p className="fs-6 text-start">
            Minha filosofia é simples: entender profundamente as necessidades de
            cada cliente e transformá-las em resultados tangíveis, seja
            melhorando a visibilidade online, aumentando o engajamento do
            usuário ou otimizando a performance de sites.
          </p>
          <p className="fs-6 text-start">
            Acredito que uma presença digital forte e estratégica não apenas
            destaca sua marca na multidão, mas também abre portas para novas
            oportunidades de negócio.
          </p>
          <p className="fs-6 text-start">
            Gostaria de saber mais como cheguei até aqui e como posso contribuir
            para o seu negócio?{" "}
            <a
              href="#"
              className="text-primary-empahsis fw-bold text-decoration-underline letter-spacing"
            >
              Leia mais...
            </a>
          </p>
        </div>
      </section>
      {/* Services Section */}
      {/* Desenvolvimento */}
      <section>
        <h3 className="fs-1 my-5 pb-4 text-center">Serviços</h3>
        <div className="container text-center my-5">
          <div className="row">
            {/* Desenvolvimento */}
            <div className="col-md-4 mb-5">
              <p className="fs-4 mb-4">Desenvolvimento</p>
              <div className="my-2">
                <Image
                  src="/desenvolvedor-web-sentado-no-chao-com-notebook-no-colo.svg"
                  alt="Imagem SVG de um Desenvolvedor Full Stack trabalhando tranquilamente sentado no chão com seu desktop no colo. Na sua frente a ícones parecidos com hologramas representando as linguagens de programação que ele domina. Atrás dele tem uma imagem da tela de computador do tamanho dele com códigos na tela."
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
              <button
                className="btn-custom fs-5"
                style={{ height: "50px", width: "189px" }}
              >
                Saiba mais
              </button>
            </div>
            {/* SEO */}
            <div className="col-md-4 mb-5">
              <p className="fs-4 mb-4">SEO</p>
              <div className="my-2">
                <Image
                  src="/homem-segurando-lupa-gigante-buscando-seo.svg"
                  alt="Imagem SVG de um Desenvolvedor Full Stack segurando uma lupa gigante em busca de problemas de SEO (Search Engine Optimization) códigos na tela do computador."
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
              <button
                className="btn-custom fs-5"
                style={{ height: "50px", width: "189px" }}
              >
                Saiba mais
              </button>
            </div>
            {/* Gestão de Tráfego */}
            <div className="col-md-4 mb-5">
              <p className="fs-4 mb-4">Gestão de Tráfego</p>
              <div className="my-2 py-4">
                <Image
                  src="/gestao-de-trafego.svg"
                  alt="Imagem SVG representando dois homens e uma mulher realizando o trabalho de gestão de tráfego para aumentar as vendas."
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
              <button
                className="btn-custom fs-5 my-3"
                style={{ height: "50px", width: "189px" }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="container my-5 py-5 portfolio-container">
        <h2 className="fs-1 text-center mb-5">Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <Image
                  src="/path/to/mockup-image.jpg"
                  alt={`Project ${index + 1}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Project Title {index + 1}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque vitae dapibus ex.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="container my-5 text-center">
        <p className="gradient-paragraph fs-2 fw-bold my-3">
          Venha dar vida a sua ideia!
        </p>
        <div className="my-4">
          <Image
            src="/formulario-de-contatos.svg"
            alt="Foto do Desenvolvedor Full Stack, Rafael Lopes de perfil e olhando para cima . Ele está usando camiseta cinza clara, camisa xadrez com tons de verde escuro e preto e calça preta. O Desenvolvedor Rafael Lopes é um homem negro de cabelos e olhos pretos"
            width={300}
            height={480}
            style={{ borderRadius: "39px" }}
            layout="intrinsic"
            className="shadow-sm"
          />
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
