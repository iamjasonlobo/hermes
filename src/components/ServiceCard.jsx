const ServiceCard = ({ service }) => {
  return (
    <div key={service.id} className="info-card">
      <img src={service.photo} alt={service.name} />
      <h2>{service.name}</h2>
      <p>by {service.provider}</p>
      <div>Stars: {service.stars}</div>
      <div>Points to buy: {service.points}</div>
    </div>
  );
};

export default ServiceCard;
