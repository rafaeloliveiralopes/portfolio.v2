import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container-fluid text-center">
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
      </div>
      <div
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
        <div className="mx-auto" style={{ maxWidth: "95%" }}>
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
      </div>
      {/* Seção Serviços */}
      {/* Desenvolvimento */}
      <div className="container-fluid text-center my-5">
        <h3 className="fs-1 my-5 pb-4">Serviços</h3>
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
        <div className="d-block">
          <button
            className="btn-custom fs-5 mb-5"
            style={{ height: "50px", width: "189px" }}
          >
            Saiba mais
          </button>
        </div>
      </div>
      {/* Seção Serviços */}
      {/* SEO */}
      <div className="container-fluid text-center my-5">
        <p className="fs-4 mb-1">SEO</p>
        <div className="my-2">
          <Image
            src="/homem-segurando-lupa-gigante-buscando-seo.svg"
            alt="Imagem SVG de um Desenvolvedor Full Stack segurando uma lupa gigante em busca de problemas de SEO (Search Engine Optimization) códigos na tela do computador."
            width={200}
            height={200}
            layout="intrinsic"
          />
        </div>
        <div className="d-block">
          <button
            className="btn-custom fs-5 mb-5"
            style={{ height: "50px", width: "189px" }}
          >
            Saiba mais
          </button>
        </div>
      </div>
      {/* Seção Serviços */}
      {/* Gestão de Tráfego */}
      <div className="container-fluid text-center my-5">
        <p className="fs-4 mb-4">Gestão de Tráfego</p>
        <div className="my-2">
          <Image
            src="/gestao-de-trafego.svg"
            alt="Imagem SVG representando dois homens e uma mulher realizando o trabalho de gestão de tráfego para aumentar as vendas."
            width={200}
            height={200}
            layout="intrinsic"
          />
        </div>
        <div className="d-block">
          <button
            className="btn-custom fs-5 mb-5 my-3"
            style={{ height: "50px", width: "189px" }}
          >
            Saiba mais
          </button>
        </div>
      </div>
    </main>
  );
}
