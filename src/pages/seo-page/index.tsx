import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Seo.modules.css";
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

const seoServices: Service = {
  title: "Serviços de SEO",
  description:
    "Para realmente se destacar e atrair clientes, você precisa ser encontrado. Ofereço serviços completos de SEO para garantir que seu site não apenas apareça nos resultados de busca, mas também atraia visitas qualificadas e gere conversões.",
  myServices: [
    "Auditoria de SEO",
    "Análise de concorrência",
    "SEO on page",
    "SEO off page",
    "SEO Técnico",
    "SEO local",
    "Relatório e análise de desempenho",
  ],
  image: "./seo-expert-working.svg",
  benefits: [
    "Estratégias Personalizadas: Desenvolverei um plano exclusivo para atender às necessidades da sua empresa.",
    "SEO Avançado: Para garantirmos que seu site seja facilmente encontrado nos mecanismos de busca.",
    "Análise de Concorrência: Investigamos os concorrentes para entender como posicioná-lo melhor no mercado.",
    "Otimização Técnica: Corrigimos problemas técnicos que possam estar impedindo seu site de alcançar todo o seu potencial.",
    "SEO Local: Otimizamos sua presença para buscas locais, garantindo que clientes próximos possam encontrar seus serviços.",
    "Relatórios Detalhados: Fornecemos relatórios detalhados sobre o desempenho do SEO e sugestões contínuas para melhorias.",
  ],
};

export default function SeoPage() {
  const service = seoServices;

  return (
    <>
      <Navbar />
      <main className="container pt-4 fs-5">
        <ScriptBootstrap />
        <section id="seo-page">
          <Container>
            <Row className="mt-5">
              <Col md={12}>
                <h1 className=" gradient-paragraph">{service.title}</h1>
                <p>Transforme seu site em uma máquina de atrair clientes.</p>
                <Col md={4} className="mb-3">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/1f123968-32b0-4a93-ad0d-d900d6438958/KRkC0PjOhL.json"
                    style={{ height: "300px", width: "300px" }}
                  />
                </Col>
                <p>{service.description}</p>
                <div className="services mt-5">
                  <h2>Serviços Oferecidos</h2>
                  <ul>
                    {service.myServices.map((myService, index) => (
                      <li key={index}>{myService}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} md={9} className="benefits">
                <h2>Benefícios</h2>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} md={3} className="mt-4 mt-md-0">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/3b446896-d914-4e7e-aabc-3cd55c68bdba/9z53hv9EYu.json"
                  style={{ height: "250px", width: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <p>
                Caso deseje melhorar a visibilidade do seu site, clique no botão
                abaixo para solicitar um orçamento pelo WhatsApp ou preencha o
                formulário que entrarei em contato!
              </p>
              <Col>
                <Button className="btn-custom">
                  <a
                    href="https://wa.me/556292136842?text=Ol%C3%A1%2C%20estou%20interessado%20em%20solicitar%20um%20or%C3%A7amento%20para%20os%20servi%C3%A7os%20de%20SEO.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
                    target="_blank"
                    className="text-white"
                  >
                    Solicitar Orçamento
                  </a>
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Contact Form */}
        <section className="container mt-5 text-center">
          <p className="gradient-paragraph fs-2 fw-bold mt-5">
            Venha dar vida às suas ideias!
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
