import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://images.pexels.com/photos/9242280/pexels-photo-9242280.jpeg",
    title: "Mantenimiento Técnico",
    description: "Limpieza, optimización, mejora y diagnóstico profesional para PCs y laptops.",
    icon: "fa-solid fa-screwdriver-wrench",
    whatsapp:
    "https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Mantenimiento%20Técnico"  
  },
  {
    image: "https://images.pexels.com/photos/2225618/pexels-photo-2225618.jpeg",
    title: "Asesoría Personalizada",
    description: "Te ayudamos a elegir la mejor configuración según tu presupuesto y necesidades.",
    icon: "fa-solid fa-comments",
    whatsapp:
    "https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Asesoría" 
  },
  {
    image: "/img/pc-gamer-hero.png",
    title: "Ensamble de PCs",
    description: "Armamos computadoras gaming, streaming y trabajo de alto rendimiento.",
    icon: "fa-solid fa-computer",
    whatsapp:
    "https://wa.me/51906034060?text=Hola,%20quiero%20información%20sobre%20el%20servicio%20de%20Ensamble%20de%20PC" 
  },
];

const Products = () => {
  return (
    <section id="products">
      <span className="section-tag">
        NUESTROS SERVICIOS
      </span>
      <h2>Servicios Destacados</h2>

      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            icon={product.icon}
            whatsapp={product.whatsapp}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;