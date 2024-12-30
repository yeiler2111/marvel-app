import { useNavigate } from "react-router-dom";
import "./seriesCard.css";
const SeriesCard = ({ series } : any) => {

    const navigate = useNavigate();
    const {title, startYear, endYear, thumbnail, resourceURI } = series;
  
    return (
      <div className="series-card">
        <img
          src={`${thumbnail?.path}.${thumbnail?.extension}`}
          alt={title}
          className="series-card-image"
        />
        <h3>{title}</h3>
        <p>{startYear} - {endYear}</p>
        <button
          className="details-btn"
          onClick={() => navigate(`/series/${encodeURIComponent(resourceURI)}`)}
        >
          Ver detalles
        </button>
      </div>
    );
  };
  
  export default SeriesCard;
  