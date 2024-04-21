import React from "react";
import styles from "../../styles/about.module.css";

const About = () => {
  return (
    <main className={styles.container}>
      <section>
        <h1>Sobre mim</h1>
        <p>Aqui um breve histórico sobre mim.</p>
      </section>
      <section>
        <h2>Histórico acadêmico</h2>
        <p>Conquistas acadêmicas e timeline</p>
      </section>
      <section>
        <h2>Experiência profissional</h2>
        <p>Visão geral da minha carreira profissional</p>
      </section>
      <section>
        <h2>Principais tecnologias</h2>
        <p>Ferramentas e tecnologias que domino e tenho conhecimento.</p>
      </section>
      <section>
        <h2>Interesses pessoais e Profissionais</h2>
        <p>Hobbies e interesses pessoais e profissionais.</p>
      </section>
    </main>
  );
};

export default About;
