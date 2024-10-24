import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChatbotServices.modules.css";
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

const chatbotServices: Service = {
  title: "Serviços de Criação e Implementação de Chatbots com IA",
  description:
    "Transforme a experiência de atendimento ao cliente com chatbots inteligentes. Ofereço serviços completos de criação e implementação de chatbots para otimizar o suporte ao cliente e aumentar a eficiência do seu negócio.",
  myServices: [
    "Desenvolvimento de Chatbots Personalizados",
    "Integração com Plataformas",
    "Treinamento de IA",
    "Análise de Desempenho",
    "Aprimoramento Contínuo",
  ],
  image: "./chatbot-expert.svg",
  benefits: [
    "Atendimento Personalizado: Criação de chatbots que entendem e respondem às necessidades específicas dos seus clientes.",
    "Integração Completa: Implementação de chatbots integrados às suas plataformas existentes.",
    "Inteligência Aprimorada: Treinamento de IA para fornecer respostas precisas e relevantes.",
    "Análise de Desempenho: Monitoramento contínuo para otimizar a performance do chatbot.",
    "Aprimoramento Contínuo: Ajustes e melhorias constantes para garantir a melhor experiência ao usuário.",
  ],
};

export default function chatbotServicesPage() {
  const service = chatbotServices;

  return (
    <>
      <Navbar />
      <main className="container pt-4 fs-5">
        <ScriptBootstrap />
        <section id="/chatbot-services-page">
          <Container>
            <Row className="mt-5">
              <Col md={12}>
                <h1 className="gradient-paragraph">{service.title}</h1>
                <p>Transforme seu site em uma máquina de atrair clientes.</p>
                <Col md={4} className="mb-3">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/e9e78951-3828-4bb2-b45f-bdb6bce0e066/FSTg1cZrj0.json"
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
                  src="https://lottie.host/35fa5e4f-56d0-4be5-baab-d176bf902572/8NjXQsSMV6.json"
                  style={{ height: "250px", width: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <p>
                Se você deseja automatizar o atendimento ao cliente e melhorar a
                experiência dos seus usuários, clique no botão abaixo para
                solicitar uma demonstração ou preencha o formulário, e entrarei
                em contato!
              </p>
              <Col>
                <Button className="btn-custom">
                  <a
                    href="https://wa.me/556292136842?text=Olá,%20gostaria%20de%20agendar%20uma%20demonstração%20sobre%20a%20implementação%20de%20um%20chatbot%20para%20meu%20negócio."
                    target="_blank"
                    className="text-white"
                  >
                    Fazer Agendamento
                  </a>
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Contact Form */}
        <section className="container mt-5 text-center">
          <p className="gradient-paragraph fs-2 fw-bold mt-5">
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
