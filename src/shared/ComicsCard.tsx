import React from "react";
import "./ComicsCard.css";

type Comic = {
  id: number;
  title: string;
  description?: string;
  pageCount: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    name: string;
  };
  urls: { type: string; url: string }[];
  creators: {
    items: { name: string; role: string }[];
  };
};

type ComicsCardProps = {
  comic: Comic;
};

const ComicsCard: React.FC<ComicsCardProps> = ({ comic }) => {
  const { title, thumbnail, series, urls } = comic;

  return (
    <div className="comic-card">
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        className="comic-image"
      />
      <div className="comic-info">
        <h2 className="comic-title">{title}</h2>
        <p className="comic-series">Series: {series.name}</p>
        <a
          href={urls.find((url) => url.type === "detail")?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="comic-link"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ComicsCard;
