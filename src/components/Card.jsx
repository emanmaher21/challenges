function Card({ iconColor, title, description }) {
  return (
    <div className="card">
      <div className={`icon ${iconColor}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;