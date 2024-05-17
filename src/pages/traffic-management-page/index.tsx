import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScriptBootstrap from "@/components/ScriptBootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TrafficManagement.modules.css";
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

const trafficManagementServices: Service = {
  title: "Serviços de Gestão de Tráfego",
  description:
    "Garanta que seu público-alvo encontre seus serviços ou produtos com facilidade. Ofereço serviços completos de gestão de tráfego para aumentar a visibilidade do seu site e atrair visitantes qualificados.",
  myServices: [
    "Planejamento de Campanhas",
    "Análise de Tráfego",
    "Otimização de Anúncios",
    "Remarketing",
    "Relatórios de Desempenho",
  ],
  image: "./traffic-management-expert.svg",
  benefits: [
    "Planejamento Personalizado: Criação de campanhas sob medida para atingir seu público-alvo.",
    "Análise Profunda: Monitoramento constante do tráfego para ajustar e otimizar estratégias.",
    "Otimização de Anúncios: Melhoria contínua de anúncios para maximizar ROI.",
    "Remarketing Eficaz: Estratégias de remarketing para reconquistar visitantes e aumentar conversões.",
    "Relatórios Detalhados: Relatórios completos para acompanhar o desempenho e ajustar ações.",
  ],
};

export default function TrafficManagementPage() {
  const service = trafficManagementServices;

  return (
    <>
      <Navbar />
      <main className="container pt-4 fs-5">
        <ScriptBootstrap />
        <section id="traffic-management-page">
          <Container>
            <Row className="mt-5">
              <Col md={12}>
                <h1 className="gradient-paragraph">{service.title}</h1>
                <p>Transforme seu site em uma máquina de atrair clientes.</p>
                <Col md={4} className="mb-3">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/a7548fa9-aadd-435a-a08f-7f6589649b4a/J4azZihSZB.json"
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
                  src="https://lottie.host/74df6118-0477-47f6-b35a-452be6c0c7d9/RoJM0VBXC2.json"
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
                <Button className="btn-custom">Solicitar Orçamento</Button>
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
