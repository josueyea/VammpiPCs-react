import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/img/pc-gamer.avif",
    title: "Computadora Gamer",
    description: "Potente computadora diseñada para juegos de alta calidad.",
    price: "S/. 4,599",
    category: "Gaming"
  },
  {
    image: "/img/laptop.avif",
    title: "Laptop Ultrabook",
    description: "Ligera y portátil, perfecta para el trabajo y el entretenimiento.",
    price: "S/. 4,599",
    category: "Laptops",
  },
  {
    image: "/img/setup-products.avif",
    title: "Setup de Productos",
    description: "Soluciones completas para configurar tu espacio de trabajo.",
    price: "S/. 4,599",
    category: "Setup",
  },
];

const categories = ["Todos", "Gaming", "Laptops", "Setup"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="products">
      <span className="section-tag">
        NUESTROS PRODUCTOS
      </span>
      <h2>Productos Destacados</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;