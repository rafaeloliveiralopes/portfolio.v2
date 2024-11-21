import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.modules.css";
import Link from "next/link";
import Image from "next/image";
import Technologies from "@/components/technologies/Technologies";
import ContactForm from "@/components/form/ContactForm";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container pt-4">
        <section id="about-page" className="row my-5 py-5 align-items-center">
          <ScriptBootstrap />
          <div className="col-12 col-sm-8 col-md-5 col-xl-4 d-flex align-items-center">
            <Image
              src="/imagem-rafael-pagina-sobre-mim.svg"
              alt="Foto do Desenvolvedor Full Stack, Rafael Lopes usando camiseta cinza e camiza longa xadrez verde escura com preto."
              width={400}
              height={400}
              layout="intrisic"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-xl-8 mt-md-2 fs-5">
            <h1>Me chamo Rafael</h1>
            <p>
              Sou desenvolvedor full stack, moro no Brasil e a minha jornada no
              mundo da programação e desenvolvimento web começou em 2018 com o
              wordpress. E em dezembro de 2021 decidi mergulhar fundo no mundo
              do desenvolvimento web.
            </p>
            <p>
              Hoje, estou dedicado a transformar ideias em realidade digital,
              especializando-me em desenvolver sites que não apenas atendem, mas
              superam as expectativas dos clientes em termos de desempenho e
              acessibilidade.
            </p>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h2 className="gradient-paragraph fs-2 fw-bold mt-md-5">
              Minha jornada
            </h2>
          </div>
          <div className="container py-5 fs-5">
            <div className="main-timeline">
              <div className="timeline left">
                <div className="card">
                  <div className="card-body">
                    <h3>2024 - O momento: Desenvolvedor Web Freelancer</h3>
                    <p className="mb-0">
                      Estou sempre atualizando meus conhecimentos em SEO e
                      gestão de tráfego para garantir que os sites que
                      desenvolvo alcancem uma posição de destaque e atraiam
                      efetivamente o público desejado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2023 - 2024: Expansão de Habilidades</h3>
                    <p className="mb-0">
                      Atuei como recepcionista no Hospital Estadual do Centro
                      Norte Goiano, onde desenvolvi habilidades interpessoais
                      cruciais e gerenciamento de situações de alta pressão.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2022 - 2023: Transição para Tech</h3>
                    <p className="mb-0">
                      Decidi fazer uma mudança ousada para o desenvolvimento
                      web. Completando um bootcamp de um ano, desenvolvi uma
                      paixão por criar soluções digitais que atendem e superam
                      as necessidades dos usuários.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2016 - 2021: Advocacia e Tecnologia</h3>
                    <p className="mb-0">
                      Navegando pelo mundo do direito previdenciário, utilizei
                      tecnologias para peticionamento e acompanhamento
                      processual, fortalecendo minhas capacidades analíticas e
                      planejamento estratégico.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline left">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2012 - 2016: Liderança e Gestão</h3>
                    <p className="mb-0">
                      Promovido a Encarregado de Operações, liderei uma equipe
                      de 8 pessoas, aprofundando minhas habilidades em
                      liderança, treinamento de equipes e segurança do trabalho.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline right">
                <div className="card">
                  <div className="card-body p-4">
                    <h3>2006 - 2012: Início da Jornada</h3>
                    <p className="mb-0">
                      Começando como Operador Júnior na Vopak, mergulhei nas
                      ferramentas da qualidade e na gestão de inventário,
                      cultivando uma base sólida em organização e atenção aos
                      detalhes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="fs-5">
            Minha trajetória acadêmica destaca-se por um incessante anseio por
            aprendizado e aperfeiçoamento. Desde especializações técnicas até
            uma educação abrangente em engenharia de software, cada etapa do meu
            percurso foi essencial para construir uma base sólida de
            conhecimento que utilizo para entregar soluções práticas e
            eficientes
          </p>
          <p className="fs-5">
            Para mais detalhes sobre minha formação e certificações, convido
            você a visualizar meu{" "}
            <Link
              href="https://www.canva.com/design/DAFNFtphlKg/beqYIdMMCwk5DH9ElJX6iw/edit?continue_in_browser=true"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              currículo
            </Link>
            .
          </p>
        </section>
        <section className="my-5 pt-5pb-4">
          <div className="text-center mb-3">
            <h2 className="gradient-paragraph fs-2 fw-bold">
              Outras curiosidades sobre mim
            </h2>
          </div>
          <p className="fs-5">
            Além de ser um entusiasta da tecnologia e um solucionador de
            problemas ávido, existem algumas facetas interessantes que compõem
            quem sou tanto dentro quanto fora do ambiente de trabalho.
          </p>
          <div className="row align-items-center my-4">
            <div className="col-xl-4 col-md-5 mb-3 mb-md-0">
              <Image
                src="/partitura.jpg"
                alt="Foto do Desenvolvedor Full Stack, Rafael Lopes usando camiseta cinza e camisa longa xadrez verde escura com preto."
                width={400}
                height={400}
                layout="intrinsic"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8 fs-5">
              <p>
                <strong>Música e Criatividade:</strong> Minha dedicação de três
                anos ao conservatório de música, focado no violão clássico, não
                só alimentou minha alma artística mas também refinou minha
                atenção aos detalhes e minha capacidade de concentração.
              </p>
              <p>
                Habilidades essas que se traduzem diretamente na meticulosa
                codificação e design de interfaces de usuário que você verá em
                meu trabalho.
              </p>
            </div>
          </div>
          <div className="row flex-md-row-reverse align-items-center my-4">
            <div className="col-xl-4 col-md-5 mb-3 mb-md-0">
              <Image
                src="/coracao-mosaico-rafa-ane-rodolpho.svg"
                alt="Foto do Desenvolvedor Full Stack, Rafael Lopes usando camiseta cinza e camisa longa xadrez verde escura com preto."
                width={400}
                height={400}
                layout="intrinsic"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8 fs-5">
              <p>
                <strong>Vida e Equilíbrio:</strong> Quando não estou programando
                ou otimizando sites para os motores de busca, eu valorizo o
                tempo de qualidade jogando videogames, lendo ou assistindo
                seriados com minha esposa.
              </p>
              <p>
                Acredito que um equilíbrio saudável entre trabalho e vida
                pessoal é crucial para o pensamento inovador e a
                sustentabilidade de um alto desempenho profissional.
              </p>
            </div>
          </div>
          <div className="row align-items-center my-4">
            <div className="col-xl-4 col-md-5 mb-3 mb-md-0">
              <Image
                src="/ceu-estrelado.jpg"
                alt="Foto do Desenvolvedor Full Stack, Rafael Lopes usando camiseta cinza e camisa longa xadrez verde escura com preto."
                width={400}
                height={400}
                layout="intrinsic"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8 fs-5">
              <p>
                <strong>Crescimento e Autoconhecimento:</strong> Meu compromisso
                com o autoconhecimento é refletido nos resultados do meu perfil
                DISC (Dominância e Conformidade como traços predominantes) e no
                Eneagrama, onde destaco-me como um Tipo 3 (O Realizador) e Tipo
                5 (O Investigador).
              </p>
              <p>
                Na prática, isso significa que tenho um impulso natural para
                alcançar eficiência, inovação e excelência técnica, ao mesmo
                tempo em que busco continuamente conhecimento e compreensão mais
                profundos em desenvolvimento web, SEO e gestão de tráfego.
              </p>
            </div>
          </div>
        </section>

        <section className="my-5 pt-5 pb-4">
          <div className="text-center mb-3">
            <h2 className="gradient-paragraph fs-2 fw-bold">
              Principais tecnologias e ferramentas
            </h2>
          </div>
          <div className="text-center">
            <Technologies />
          </div>
        </section>

        <section className="my-5 pb-4">
          <div className="text-center mb-3">
            <h2 className="gradient-paragraph fs-2 fw-bold">
              Vamos construir algo incrível juntos
            </h2>
          </div>
          <div className="fs-5">
            <p>
              Se você está procurando soluções digitais que destacam e
              impulsionam seu negócio, ou precisa de uma estratégia de SEO que
              realmente converte, minha paixão e expertise são o que você
              precisa para levar seu projeto ao próximo nível.
            </p>
            <p>
              Conecte-se comigo para uma conversa sem compromissos sobre suas
              metas digitais e descubra como podemos transformar suas ideias em
              realidade. Preencha o formulário abaixo ou entre em contato comigo
              pelas mídias sociais.
            </p>
          </div>
        </section>
        <section className="container my-5 text-center">
          <p className="gradient-paragraph fs-2 fw-bold my-3">
            Venha dar vida às suas ideias!
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
        <Footer />
      </main>
    </>
  );
}
