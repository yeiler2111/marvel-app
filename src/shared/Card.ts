// Asegúrate de importar React si es necesario
import { CSSProperties } from "react";

const card: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  width: "100%", // Ancho completo para hacer que se ajuste bien
  height: "400px", // Altura fija para que todas las cartas sean del mismo tamaño
  marginBottom: "20px",
  backgroundColor: "#fff",
};

const image: CSSProperties = {
  width: "100%",
  height: "200px", // Establecer una altura fija para las imágenes
  objectFit: "cover", // Asegura que la imagen mantenga su proporción
};

const details: CSSProperties = {
  padding: "15px",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const name: CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0",
};

const modified: CSSProperties = {
  fontSize: "14px",
  color: "#666",
};

const button: CSSProperties = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "auto",
  textAlign: "center",
  transition: "background-color 0.3s",
};

const buttonHover: CSSProperties = {
  backgroundColor: "#0056b3",
};

export default {
  card,
  image,
  details,
  name,
  modified,
  button,
  buttonHover,
};
