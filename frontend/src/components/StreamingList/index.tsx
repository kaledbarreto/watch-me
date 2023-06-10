import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetOnePlataform } from "../../api/client";
import { Card } from "../Card";
import { CardLoading } from "../CardLoading";
import "./styles.scss";

interface IStreamingSmallList {
  datasource: any;
}

export function StreamingList({ datasource }: IStreamingSmallList) {
  const { mutateAsync: handleGetOnePlatform } = useGetOnePlataform();
  const [data, setData] = useState<any>("");
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(true);

  const getOnePlatform = useCallback(async (data: any) => {
    try {
      const platform = await handleGetOnePlatform(data);
      setData(platform.data.series);
      return;
    } catch (err) {
      console.log("err: ", err);
      return undefined;
    }
  }, []);

  useEffect(() => {
    getOnePlatform(datasource?.id).then(() => setIsFetching(false));
  }, []);

  return (
    <div className="streaming_container">
      <div className="straming_header">
        <h3>{datasource?.name}</h3>
        <h4 onClick={() => navigate(`/streaming/${datasource?.id}`)}>
          Ver mais
        </h4>
      </div>
      <div className="streaming_cards">
        {isFetching
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <CardLoading key={i} />)
          : data &&
            data.map((serie: any) => (
              <Card key={serie.id} datasource={serie} />
            ))}
      </div>
    </div>
  );
}
