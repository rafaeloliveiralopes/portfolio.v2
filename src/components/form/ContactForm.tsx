import React from "react";
import styles from "./Form.modules.css";

function ContactForm() {
  return (
    <div
      className="container fs-5 my-5 p-4 text-start rounded form-container"
      style={{ backgroundColor: "#609085" }}
    >
      <form className={styles.form}>
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
            pattern="^\(\d{2}\)\s\d{5}-\d{4}$"
            placeholder="(00) 90000-1111"
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Assunto
          </label>
          <select className="form-select" id="subject" name="subject" required>
            <option value="">Escolha uma opção...</option>
            <option value="Desenvolvimento Web">Desenvolvimento Web</option>
            <option value="SEO">SEO</option>
            <option value="Gestão de Tráfego">Gestão de Tráfego</option>
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
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-custom" style={{ height: "50px" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
