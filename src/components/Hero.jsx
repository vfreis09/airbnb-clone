import "../styles/Hero.css";

function Main() {
  return (
    <section>
      <div className="photo-grid-container">
        <img src="./photo-grid.png" className="photo-grid"></img>
      </div>
      <div className="text-container">
        <p className="title">Online Experiences</p>
        <p className="description">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Main;
