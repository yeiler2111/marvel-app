import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesCharacter } from "../../services/Services.characters";
import CharacterCard from "../../shared/CharacterCard";
// Definir el tipo de los personajes
// interface Character {
//   id: string; // Reemplazar con las propiedades reales del personaje
//   name: string; // Reemplazar con las propiedades reales del personaje
//   // Agregar otras propiedades según sea necesario
// }

const Characters = () => {
  const [characters, setCharacters] = useState<any[] | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await ServicesCharacter.getCharacters();
      setCharacters(res?.data?.results || []);
    };
    getCharacter();
  }, []);
  const navigate = useNavigate();

  const handlerDetails = (id: number) => {
    
    navigate(`/character/${id}`);
  };
  return (
    <div style={{ marginTop: 100, color: "black" }}>
      <div className="row">
        {characters?.length || [].length > 0
          ? characters?.map((item) => (
              <div className="col" key={item.id}>
                <CharacterCard
                  character={item}
                  onViewDetails={handlerDetails}
                />
              </div>
            ))
          : "En estos momentos no se encuentran personajes"}
      </div>
    </div>
  );
};

export default Characters;
