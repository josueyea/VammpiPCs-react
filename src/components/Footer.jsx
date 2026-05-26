const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img className="footer-logo" src="/img/primer-logo.png"/>
          <p>Tecnología de alto rendimiento para gamers y profesionales.</p>
        </div>
        <div className="footer-links">
          <h3>Navegación</h3>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-links">
          <h3>Servicios</h3>
          <a href="#">Armado de PCs</a>
          <a href="#">Servicio Técnico</a>
          <a href="#">Venta de Componentes</a>
          <a href="#">Soporte Especializado</a>
        </div>
        <div className="footer-links">
          <h3>Contacto</h3>
          <a href="#">
            <i className="fa-solid fa-phone"></i>
            +51 999 999 999
          </a>
          <a href="#">
            <i className="fa-solid fa-envelope"></i>
            hola@vampipcs.com
          </a>
          <a href="#">
            <i className="fa-solid fa-location-dot"></i>
            Lima, Perú
          </a>
          <div className="socials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 VampiPCs - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;