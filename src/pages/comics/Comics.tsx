import { useEffect, useState } from "react";
import { ServicesComics } from "../../services/Services.characters";
import ComicsCard from "../../shared/ComicsCard";
import Header from "../../shared/Header";
import "./../../shared/comicsCard.css";

const Comics = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    const getAllComics = async () => {
      const res = await ServicesComics.getAllComics();
      setComics(res?.data.data.results);
    };
    getAllComics();
  }, []);
  useEffect(() => {
    console.log(comics);
  }, [comics]);
  return (
    <div className="row">
      <Header />
      {comics.map((comic:any) => (
        <div key={comic?.id} className="col-3" style={{marginTop:100}}>
          <ComicsCard comic={comic} />
        </div>
      ))}
    </div>
  );
};

export default Comics;
