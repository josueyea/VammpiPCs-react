const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img className="footer-logo" src="/img/primer-logo.png"/>
          <p>Tecnología de alto rendimiento para gamers y profesionales.</p>
        </div>
        <div className="footer-links">
          <h3>Servicios</h3>
          <a href="https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Ensamble%20de%20PC" >Armado de PCs</a>
          <a href="https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20Técnico">Servicio Técnico</a>
          {/* <a href="#">Venta de Componentes</a> */}
          <a href="https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Asesoría" >Asesoría Especializado</a>
        </div>
        <div className="footer-links">
          <h3>Contacto</h3>
          {/* <a href="#">
            <i className="fa-solid fa-phone"></i>
            +51 999 999 999
          </a> */}
         {/* <a href="" target="_blank">
            <i className="fa-solid fa-envelope"></i>
            hola@vampipcs.com
          </a> */}
          <p>
            <i className="fa-solid fa-location-dot"></i>
            Lima, Perú
          </p>
          <div className="socials">
            <a href="https://www.instagram.com/renzo_montoya07/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@vampiritood" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://wa.me/51906034060?text=Hola,%20quiero%20información" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://discord.gg/YJrzaMrXdu" target="_blank"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Horarios</h3>
            <p>
              Atención: <br /><br />
              Lunes - Sábado <br /> <br />
                10am - 9pm
            </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 VampiPCs - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;