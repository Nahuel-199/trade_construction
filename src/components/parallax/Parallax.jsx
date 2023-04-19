import React from "react";
import "./parallax.css";

const Parallax = () => {
  return (
    <div id="parallax">
      <section className="parallax-corte page-section">
        <div className="container text-center py-5">
          <h3 className="text-white titulos-seccion mt-3">
            <b>NUESTROS VALORES</b>
          </h3>
          <button className="button2">
            Compromiso con el cliente, Respeto, Confianza
          </button>
          <p className="text_parallax">
            Nuestra misión es ofrecer a nuestros clientes productos de alta
            calidad para la construcción, enfocados en materiales de
            albañilería, techos, maderas y otros. Brindamos un servicio
            profesional y de excelencia para satisfacer las necesidades de
            nuestros clientes. Nuestro objetivo es construir relaciones a largo
            plazo con nuestros clientes, proporcionando un servicio de calidad,
            asesoramiento experto y una comunicación eficaz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
