const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-text">
        <span>TECNOLOGÍA • GAMING • ALTO RENDIMIENTO</span>

        <h1>Construimos PCs Gaming de Alto Nivel</h1>

        <p>
          Venta de computadoras y servicio técnico profesional
          para gamers, streamers y empresas.
        </p>

        <div className="hero-buttons">
          <a className="btn1" href="#cta">Solicitar Soporte</a>
          <a className="btn2" href="#cta">Cotizar Ensamble</a>
        </div>
        <div className="hero-badges">
            <div className="badge">
              <i className="fa-solid fa-truck"></i>
              <p>Envíos a todo el Perú</p>
            </div>
            <div className="badge">
              <i className="fa-solid fa-shield"></i>
              <p>Garantía asegurada</p>
            </div>
            <div className="badge">
              <i className="fa-solid fa-headset"></i>
              <p>Soporte 24/7</p>
            </div>
      </div>
      </div>
      <div className="hero-image">
        <div className="hero-glow"></div>
        <img className="hero-img" src="/img/pc-gamer-hero.png" alt="PC Gamer" />
        <div className="hero-shadow"></div>
      </div>
    </section>
  );
};

export default Hero;