import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container text-center">
        <h1 className="greetings fs-5 px-4">
          Olá! Sou Desenvolvedor Web Full Stack
        </h1>
        <p className="fs-6 text-start mx-3">
          Com expertise em tecnologias de ponta e uma abordagem personalizada,
          estou aqui para elevar sua presença online e trazer resultados
          tangíveis para o seu negócio. Vamos construir algo incrível juntos.
        </p>
        <div className="image-container my-4">
          <Image
            src="/desenvolvedor-fullstack-trabalhando-no-desktop.jpg"
            alt="Desenvolvedor Full Stack trabalhando em um projeto com seu desktop."
            width={250}
            height={250}
            layout="fixed"
            style={{
              borderRadius: "39px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div>
          <button className="btn-custom">Conheça meus serviços</button>
        </div>
        <p className="gradient-paragraph fs-2 fw-bold py-4">
          Faço suas idéias ganhar vida!
        </p>
      </div>
      <div
        className="container-fluid bg-about py-4 text-center"
        style={{ backgroundColor: "#609085" }}
      >
        {/* About section */}
        <h2 className="my-4">Sobre mim</h2>
        <div className="my-4">
          <Image
            src="/rafael-desenvolvedor-full-stack.jpg"
            alt="Desenvolvedor Full Stack trabalhando em um projeto com seu desktop."
            width={195}
            height={200}
            layout="fixed"
            style={{
              borderRadius: "39px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <p className="fs-6 text-start mx-3">
          Minha filosofia é simples: entender profundamente as necessidades de
          cada cliente e transformá-las em resultados tangíveis, seja melhorando
          a visibilidade online, aumentando o engajamento do usuário ou
          otimizando a performance de sites.
        </p>
        <p className="fs-6 text-start mx-3">
          Acredito que uma presença digital forte e estratégica não apenas
          destaca sua marca na multidão, mas também abre portas para novas
          oportunidades de negócio.
        </p>
        <p className="fs-6 text-start mx-3">
          Gostaria de saber mais como cheguei até aqui e como posso contribuir
          para o seu negócio?{" "}
          <a href="#" className="text-primary-empahsis">
            Leia mais...
          </a>
        </p>
      </div>
    </main>
  );
}
