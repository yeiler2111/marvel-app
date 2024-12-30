import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesComics } from "../../services/Services.characters";

const DetailsComic = () => {
  const { id } = useParams(); // Obtén el ID de la URL
  const [comic, setComic] = useState<any>(null);

  useEffect(() => {
    const fetchComicDetails = async () => {
      const res = await ServicesComics.getComicDetails(`${id}`); // Implementa este método en tu servicio
      setComic(res?.data?.data?.results[0]);
    };
    fetchComicDetails();
  }, [id]);

  if (!comic) return <p>Cargando detalles del cómic...</p>;

  return (
    <div className="container mt-5">
      <h1>{comic.title}</h1>
      <img src={`${comic.thumbnail.path}.${comic?.thumbnail.extension}`} alt={comic?.title} />
      <p>{comic.description || "No hay descripción disponible"}</p>
      <p>Publicado: {comic.dates[0]?.date}</p>
    </div>
  );
};

export default DetailsComic;
