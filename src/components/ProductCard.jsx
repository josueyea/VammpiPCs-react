const ProductCard = ({ image, title, description, icon, whatsapp }) => {
  return (
    <div className="product-item reveal">
      <img className="product-img" src={image} alt={title} />
      <div className="product-overlay"></div>
      <div className="product-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <a href={whatsapp} target="_blank"       className="product-btn">
          Solicitar Servicio
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
export default ProductCard;
