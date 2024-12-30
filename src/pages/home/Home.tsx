import Header from "../../shared/Header";
import Characters from "../characters/Characters";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Characters  />
    </div>
  );
};

export default Home;
