const StatsCard = ({ icon, number, label }) => {
  return (
    <div className="stats-card">
      {icon}
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatsCard;