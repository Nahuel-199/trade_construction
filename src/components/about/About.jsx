import React from "react";
import mq from "../../assets/about-img.png";
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Nuestra Misión.</h2>
      <span className="section__subtitle">
        Somos una empresa Constructora, dedicada a mejorar la calidad de vida de
        las personas desde la ejecución de obras claves para el desarrollo del
        país. Aplicamos todo el conocimiento y tecnología en la ejecución de los
        contratos atentos a las exigencias de nuestros clientes y comitentes,
        logrando un vínculo de satisfacción y confianza.
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="img_finance2" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Nuestro propósito es brindar soluciones integrales para la
            construcción. Nuestra visión es ser líderes en el sector de la
            construcción, ofreciendo productos de calidad y soporte técnico para
            ayudar a nuestros clientes a alcanzar sus objetivos. Estamos
            comprometidos a trabajar con nuestros clientes para crear un futuro
            sostenible y satisfactorio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
