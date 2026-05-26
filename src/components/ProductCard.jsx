const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-item reveal">

      <img className="product-img" src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="product-price">{price}</span>

      <button className="product-btn">Ver Producto</button>

    </div>
  );
};
export default ProductCard;