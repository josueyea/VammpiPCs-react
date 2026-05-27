import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header>
      <a className="logo" href="#hero">
        <img className="logo" src="/img/primer-logo.png" alt="logo de VampiPCs" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i
          className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
      </button>

      <nav className={isMenuOpen ? "navbar active" : "navbar"}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
          </li>
          {/* <li>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
          </li> */}
          <li>
            <a href="#footer" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-actions">
        <a href="https://wa.me/51906034060?text=Hola,%20quiero%20cotizar%20una%20PC" target="_blank"       className="nav-cta">
          Cotizar PC
        </a>
        {/* <i className="fa-solid fa-cart-shopping cart-icon"></i> */}
      </div>
    </header>
  );
};

export default Navbar;
