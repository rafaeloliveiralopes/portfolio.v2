import React from "react";
import Image from "next/image";
import ContactForm from "../components/form/ContactForm";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function Home() {
  return (
    <main>
      <section className="container-home container-fluid">
        <div className="row d-flex justify-content-center medium-layout-h1">
          <h1 className="greetings px-4 text-center pt-md-5 mt-md-5">
            Olá! Sou Desenvolvedor Web Full Stack
          </h1>
          <div className="col-xl-4 col-md-7 text-md-start text-start">
            <div className="fs-md-custom">
              <p>
                Com expertise em tecnologias de ponta e uma abordagem
                personalizada, estou aqui para elevar sua presença online e
                trazer resultados tangíveis para o seu negócio. Vamos construir
                algo incrível juntos.
              </p>
            </div>
            <a href="#services" className="btn-link-custom">
              <button className="btn home-btn mb-4">
                Conheça meus serviços
              </button>
            </a>
          </div>
          <div className="col-xl-3 col-md-4 d-flex justify-content-center align-items-start pt-5 py-md-0 ms-xl-0">
            <Image
              src="/desenvolvedor-fullstack-trabalhando-no-desktop.jpg"
              alt="Desenvolvedor Full Stack trabalhando em um projeto com seu desktop."
              width={300}
              height={300}
              layout="intrinsic"
              className="rounded-5 shadow-sm"
            />
          </div>
          <p className="gradient-paragraph fs-2 fw-bold mt-5 mb-4 pb-5 text-center">
            Faço suas idéias ganhar vida!
          </p>
        </div>
      </section>
      {/* About me section */}
      <section
        className="container-fluid py-4 text-center container-about-section"
        id="about"
        style={{ backgroundColor: "#609085" }}
      >
        <div className="row">
          <h2 className="fs-1 me-md-5 text-center py-4">Sobre mim</h2>
          <div className="col-md-4 col-sm-4 text-md-end mb-md-5 mb-4 mt-md-0">
            <Image
              src="/rafael-desenvolvedor-full-stack.jpg"
              alt="Foto do Desenvolvedor Full Stack, Rafael Lopes de perfil e olhando para cima. Ele está usando camiseta cinza clara, camisa xadrez com tons de verde escuro e preto e calça preta. O Desenvolvedor Rafael Lopes é um homem negro de cabelos e olhos pretos"
              width={265}
              height={300}
              layout="intrinsic"
              className="rounded-5 shadow-sm"
            />
          </div>
          <div className="col-md-7 col-sm-8 fs-md-custom mt-md-2 mb-3">
            <p className="text-start">
              Minha filosofia é simples: entender profundamente as necessidades
              de cada cliente e transformá-las em resultados tangíveis, seja
              melhorando a visibilidade online, aumentando o engajamento do
              usuário ou otimizando a performance de sites.
            </p>
            <p className="text-start">
              Acredito que uma presença digital forte e estratégica não apenas
              destaca sua marca na multidão, mas também abre portas para novas
              oportunidades de negócio.
            </p>
            <p className="text-start">
              Gostaria de saber mais como cheguei até aqui e como posso
              contribuir para o seu negócio?
            </p>
            <Link href="/about-page">
              <p className="text-primary-empahsis fw-bold text-decoration-underline letter-spacing text-start">
                Leia mais...
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="pt-5" id="services">
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
              <Link href="/development-page" passHref>
                <button
                  className="btn-custom fs-5"
                  style={{ height: "50px", width: "189px" }}
                >
                  Saiba mais
                </button>
              </Link>
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
              <Link href="/seo-page" passHref>
                <button
                  className="btn-custom fs-5"
                  style={{ height: "50px", width: "189px" }}
                >
                  Saiba mais
                </button>
              </Link>
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
              <Link href="/chatbot-services-page" passHref>
                <button
                  className="btn-custom fs-5 my-3"
                  style={{ height: "50px", width: "189px" }}
                >
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section
        className="container my-5 py-md-5 portfolio-container"
        id="portfolio"
      >
        <h2 className="fs-1 text-center mb-5">Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  width={300}
                  height={150}
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title fs-4 text-center">
                    {project.title}
                  </h5>
                  <p className="card-text">{project.text}</p>
                  <div className="tech-stack pb-3">
                    <p className="fs-5">{project.subtitle}</p>
                    {(project.stack ?? "").split(" | ").map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <a
                      href={project.url}
                      className="btn btn-custom"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar Site
                    </a>
                  </div>
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
            alt="Imagem SVG de um casal conversando ao celular."
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
