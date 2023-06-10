import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";
import { Card } from "../../components/Card";
import { LogoutModal } from "../../components/LogoutModal";
import { Context } from "../Home";
import "./styles.scss";

export function FavoritesDetails() {
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const navigate = useNavigate();

  const { favorites } = useContext(Context);

  return (
    <div className="streaming_details_container">
      <div className="streaming_details_heading">
        <div className="streaming_details_back_title">
          <img src={backArrow} alt="Voltar" onClick={() => navigate("/")} />
          <h3>Favoritos</h3>
        </div>
      </div>
      <div className="streaming_details_cards">
        {favorites &&
          favorites.map((serie: any) => <Card datasource={serie} />)}
      </div>
      {openDrawerLogout && (
        <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout} />
      )}
    </div>
  );
}
