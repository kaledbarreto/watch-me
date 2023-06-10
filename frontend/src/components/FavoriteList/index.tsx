import { useNavigate } from "react-router-dom";
import { Card } from "../Card";
import "./styles.scss";

interface IStreamingSmallList {
  datasource: any;
}

export function FavoriteList({ datasource }: IStreamingSmallList) {
  const navigate = useNavigate();

  return (
    <div className="streaming_container">
      <div className="straming_header">
        <h3>Favoritos</h3>
        <h4 onClick={() => navigate(`/favorites`)}>Ver mais</h4>
      </div>
      <div className="streaming_cards">
        {datasource &&
          datasource.map((serie: any) => (
            <Card key={serie.id} datasource={serie} />
          ))}
      </div>
    </div>
  );
}
