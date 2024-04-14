import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container text-center">
        <h1 className="greetings fs-5 text-center px-4">
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
        <p className="gradient-paragraph fs-2 fw-bold py-5">
          Faço suas idéias ganhar vida!
        </p>
      </div>
    </main>
  );
}
