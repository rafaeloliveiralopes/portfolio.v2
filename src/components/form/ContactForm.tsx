"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Form.modules.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Obrigado, logo entrarei em contato!");
      // Limpa o formulário
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div
      className="container fs-5 my-5 p-4 text-start rounded form-container"
      style={{ backgroundColor: "#609085" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            placeholder="Digite seu nome"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            pattern="^\d{2}\s\d{4}-\d{4}$"
            placeholder="99 9000-1111"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Digite seu melhor email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Assunto
          </label>
          <select
            className="form-select"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Escolha uma opção...</option>
            <option value="Desenvolvimento Web">Desenvolvimento Web</option>
            <option value="SEO">SEO</option>
            <option value="Criação e Implementação de Chatbot">
              Criação e Implementação de chatbot
            </option>
            <option value="Parcerias">Parcerias</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={4}
            placeholder="Sinta-se à vontade para descrever detalhadamente o que você precisa..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-custom" style={{ height: "50px" }}>
          Enviar
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ContactForm;
