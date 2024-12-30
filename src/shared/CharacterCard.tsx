import React from "react";
import styles from "./Card";

interface CharacterCardProps extends React.PropsWithChildren {
  character: {
    id: number;
    name: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    modified: string;
  };
  onViewDetails: (id: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onViewDetails,
  children,
}) => {
  const { id, name, thumbnail, modified } = character;

  return (
    <div style={styles.card}>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        style={styles.image}
      />
      <div style={styles.details}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.modified}>
          Última modificación: {new Date(modified).toLocaleDateString()}
        </p>
        {children}
        <button style={styles.button} onClick={()=>{onViewDetails(id)}}>
          Ver más información
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
