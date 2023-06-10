import { CardLoading } from "../CardLoading";
import "./styles.scss";

export function StreamingListLoading() {
  return (
    <div className="streaming_container">
      <div className="straming_header">
        <h3>Carregando...</h3>
        <h4>Ver mais</h4>
      </div>
      <div className="streaming_cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <CardLoading key={i} />
        ))}
      </div>
    </div>
  );
}
