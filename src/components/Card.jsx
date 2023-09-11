import "../styles/Card.css";

function Card() {
  return (
    <section className="card-section">
      <img src="./katie-zaferes.png" className="card-image"></img>
      <div className="description">
        <div className="title-section">
          <img src="./star.png" className="card-star"></img>
          <p>5.0 (6) &#183; USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong>From $136</strong> / person
        </p>
      </div>
    </section>
  );
}

export default Card;
