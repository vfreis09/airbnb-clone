import Nav from "./components/Nav";
//import Hero from "./components/Hero";
import Card from "./components/Card";

import "./styles/App.css";

function App() {
  return (
    <>
      <Nav />
      <Card
        img="./katie-zaferes.png"
        starImg="./star.png"
        cardStats="5.0 (6) &#183; USA"
        cardTitle="Life lessons with Katie Zaferes"
        cardCost="From $136 / person"
      />
    </>
  );
}

export default App;
