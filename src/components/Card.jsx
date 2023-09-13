import "../styles/Card.css";

function Card(props) {
  return (
    <section className="card-section">
      <img src={props.img} className="card-image"></img>
      <div className="description">
        <div className="title-section">
          <img src={props.starImg} className="card-star"></img>
          <p>{props.cardStats}</p>
        </div>
        <p>{props.cardTitle}</p>
        <p>{props.cardCost} </p>
      </div>
    </section>
  );
}

export default Card;
