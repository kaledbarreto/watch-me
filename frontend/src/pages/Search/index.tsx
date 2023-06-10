import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchSerie } from "../../api/client";
import backArrow from "../../assets/back-arrow.svg";
import { Card } from "../../components/Card";
import { LogoutModal } from "../../components/LogoutModal";
import "./styles.scss";

export function SearchDetails() {
  const [data, setData] = useState<any>("");
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { mutateAsync: handleSearchSerie } = useSearchSerie();

  const search = useCallback(async (data: any) => {
    try {
      const result = await handleSearchSerie({ name: data });
      setData(result.data);
      return;
    } catch (err) {
      console.log("err: ", err);
      return undefined;
    }
  }, []);

  useEffect(() => {
    search(searchParams.get("name"));
  }, []);

  return (
    <div className="streaming_details_container">
      <div className="streaming_details_heading">
        <div className="streaming_details_back_title">
          <img src={backArrow} alt="Voltar" onClick={() => navigate("/")} />
          <h3>Busca por "{searchParams.get("name")}"</h3>
        </div>
      </div>
      <div className="streaming_details_cards">
        {data && data.map((serie: any) => <Card datasource={serie} />)}
      </div>
      {openDrawerLogout && (
        <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout} />
      )}
    </div>
  );
}
