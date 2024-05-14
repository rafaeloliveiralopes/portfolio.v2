import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Development.modules.css";
import Image from "next/image";
import ContactForm from "@/components/form/ContactForm";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";

interface Service {
  title: string;
  myServices: string[];
  description: string;
  image: string;
  benefits: string[];
}

const developmentServices: Service = {
  title: "Desenvolvimento Web Full Stack",
  description:
    "Se você quer aumentar suas vendas e alcançar mais clientes, precisa de um site profissional que se destaque. A minha especialidade é oferecer serviços completos de desenvolvimento web e SEO, garantindo que seu site esteja na primeira página do Google e ofereça uma experiência de usuário excepcional.",
  myServices: [
    "Sites",
    "Landing pages",
    "E-commerce",
    "Sistemas web",
    "APIs",
    "Manutenção de sites",
    "Análise e otimização de desempenho",
  ],
  image: "./desenvolvedor-web-sentado-no-chao-com-notebook-no-colo.svg",
  benefits: [
    "Estratégias Personalizadas: Desenvolverei um plano exclusivo para atender às necessidades da sua empresa.",
    "SEO Avançado: Para garantirmos que seu site seja facilmente encontrado nos mecanismos de busca.",
    "Alto desempenho: Você terá um site otimizado para posicionamento no Google.",
    "Design Responsivo: Sites que funcionam perfeitamente em qualquer dispositivo.",
    "Flexibilidade de Pagamento: Escolha entre planos de assinatura mensal ou pagamento único.",
    "Suporte e Manutenção: Cuidarei do seu site para que você possa focar no seu negócio.",
  ],
};

export default function DevelopmentPage() {
  const service = developmentServices;

  return (
    <>
      <Navbar />
      <main className="container pt-4 fs-5">
        <ScriptBootstrap />
        <section id="development-page">
          <Container>
            <Row className="mt-5">
              <Col md={12}>
                <h1>{service.title}</h1>
                <Col md={4} className="mb-3">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/72a7d236-4466-43a7-9cbc-a5c0af4be90c/RPGBY8oM5J.json"
                    style={{ height: "300px", width: "300px" }}
                  />
                </Col>
                <p>{service.description}</p>
                <div className="services mt-5">
                  <h2>Desenvolvo</h2>
                </div>
                <ul>
                  {service.myServices.map((myService, index) => (
                    <li key={index}>{myService}</li>
                  ))}
                </ul>
              </Col>
            </Row>
            <Row className="benefits mt-5">
              <Col>
                <h2>Benefícios</h2>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/3fa55c61-99e9-4566-8753-f88a745b3704/QCoiuH8j8s.json"
                  style={{ height: "300px", width: "300px" }}
                />
              </Col>
            </Row>
            <Row className="mt-2 col-md-10">
              <p>
                Caso deseje dar vida à sua idéia, clique no botão abaixo para
                solicitar um orçamento pelo WhatsApp ou preencha o formulário
                que entrarei em contato!
              </p>
              <Col>
                <Button className="btn-custom">Solicitar Orçamento</Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Contact Form */}
        <section className="container mt-4 text-center">
          <p className="gradient-paragraph fs-2 fw-bold mt-4">
            Venha dar vida a sua ideia!
          </p>
          <div className="mt-5">
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
