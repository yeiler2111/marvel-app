import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServicesCharacter } from "../../services/Services.characters";
import "./characterDetails.css";

interface CharacterDetailsProps {
  // Aquí puedes definir las propiedades si necesitas pasarlas
}

const CharacterDetails: React.FC<CharacterDetailsProps> = () => {
  const { id } = useParams(); // Obtenemos el id del personaje desde la URL
  const [character, setCharacter] = useState<any>(null); // Estado para guardar la información del personaje
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const res = await ServicesCharacter.getCharactersForId(id || "0");
      setCharacter(res.data.results[0]);
    };
    if (id) {
      fetchCharacterDetails();
    }
  }, [id]);

  useEffect(() => {
    console.log(character);
  }, character);

  if (!character) {
    return <div>Cargando...</div>;
  }

  const {
    name,
    description,
    modified,
    resourceURI,
    thumbnail,
    comics,
    series,
    stories,
    events,
  } = character;
  return (
    <div className="character-details">
      {/* Información general del personaje */}
      <div className="character-header">
        <h2>{name}</h2>
        <p>{description}</p>
        <small>Last Modified: {new Date(modified).toLocaleString()}</small>
        <p>
          <a
            className="link"
            onClick={() =>
              navigate(`/comics/${encodeURIComponent(resourceURI)}`)
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Character Details
          </a>
        </p>
      </div>

      {/* Imagen del personaje */}
      <div className="character-thumbnail">
        <img src={thumbnail.path + "." + thumbnail.extension} alt={name} />
      </div>

      {/* Comics */}
      <div className="comics">
        <h3>Comics</h3>
        <p>Available Comics: {comics.available}</p>
        <ul>
          {comics.items.map((comic:any) => (
            <li key={comic.resourceURI}>
              <a
                href={`${comic.resourceURI}${import.meta.env.VITE_API_KEY}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {comic.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Series */}
      <div className="series">
        <h3>Series</h3>
        <p>Available Series: {series.available}</p>
        <ul>
          {series.items.map((serie:any) => (
            <li key={serie.resourceURI}>
              <a
                className="link"
                onClick={() =>
                  navigate(`/comics/${encodeURIComponent(resourceURI)}`)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {serie.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Stories */}
      <div className="stories">
        <h3>Stories</h3>
        <p>Available Stories: {stories.available}</p>
        <ul>
          {stories.items.map((story:any) => (
            <li key={story.resourceURI}>
              <a
                className="link"
                onClick={() =>
                  navigate(`/comics/${encodeURIComponent(resourceURI)}`)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {story.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Events */}
      <div className="events">
        <h3>Events</h3>
        <p>Available Events: {events.available}</p>
        <ul>
          {events.items.map((event:any) => (
            <li key={event.resourceURI}>
              <a
                href={`${event.resourceURI}${import.meta.env.VITE_API_KEY}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
