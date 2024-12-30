import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailsSerie.css";

const DetailsSeries = () => {
  const { title } = useParams(); // Obtén el ID de la URL
  const [series, setSeries] = useState<any>(null);

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      try {
        const res = await axios.get(`${title}${import.meta.env.VITE_API_KEY}`);
        console.log(res);
        setSeries(res?.data.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeriesDetails();
  }, [title]);

  if (!series) return <p>Cargando detalles de la serie...</p>;

    return (
    <div className="details-series-container container mt-5">
      <div className="series-header text-center mb-4">
        <h1>{series?.title}</h1>
      </div>

      <div className="series-content d-flex flex-column flex-md-row justify-content-between">
        <div className="series-image mb-4 mb-md-0">
          <img
            src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
            alt={series.title}
            className="img-fluid rounded shadow-lg"
          />
        </div>

        <div className="series-info">
          <p>{series.description || "No hay descripción disponible"}</p>
          <p>
            <strong>Inicio:</strong> {series.startYear}
          </p>
          <p>
            <strong>Fin:</strong> {series.endYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSeries;
