const WhatsAppButton = () => {
  const message = "Hola, quiero cotizar una PC o consultar por servicio técnico.";
  const phone = "51906034060";

  return (
    <a
      className="whatsapp-btn"
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;