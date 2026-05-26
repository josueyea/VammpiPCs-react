import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: "⚡",
        title: "Alto rendimiento",
        description: "Equipos optimizados para gaming, streaming y trabajo profesional."
    },
    {
        icon: "🛡",
        title: "Garantía",
        description: "Todos nuestros productos cuentan con garantía asegurada."
    },
    {
        icon: "🚚",
        title: "Envíos Nacionales",
        description: "Realizamos envíos seguros a todo el Perú."
    },
    {
        icon: "🎮",
        title: "Componentes Gamer",
        description: "Trabajamos con hardware de última generación."
    },
];

const Feature = () => {
    return(
        <section id="features">
            <h2>¿Por qué elegirnos?</h2>

            <div className="features-grid">
                {features.map((features, index) =>(
                    <FeatureCard
                        key={index}
                        icon={features.icon}
                        title={features.title}
                        description={features.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Feature;