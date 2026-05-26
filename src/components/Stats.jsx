import StatsCard from "./StatsCard";

const stats = [
  {
    icon: <i className="fa-solid fa-users"></i>,
    number: "+500",
    label: "Clientes Satisfechos",
  },
  {
    icon: <i className="fa-solid fa-desktop"></i>,
    number: "+120",
    label: "PCs Armadas",
  },
  {
    icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
    number: "+300",
    label: "Servicios Técnicos",
  },
  {
    icon: <i className="fa-solid fa-headset"></i>,
    number: "24/7",
    label: "Soporte",
  },
];

const Stats = () => {
  return (
    <section id="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;