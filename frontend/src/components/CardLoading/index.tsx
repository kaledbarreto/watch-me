import Loading from "../../assets/loading.svg";
import "./styles.scss";

export function CardLoading() {
  return (
    <div className="container-card">
      <div className="card_image_container">
        <img className="film-image" src={Loading} alt="Placeholder" />
      </div>
      <div className="film-title">
        <span>Carregando...</span>
      </div>
    </div>
  );
}
