import { useCallback, useEffect, useState } from "react";
import { Card } from "../Card";
import './styles.scss';
import { useGetOnePlataform } from "../../api/client";

interface IStreamingSmallList {
  datasource: any;
}

export function StreamingList({datasource}: IStreamingSmallList) {
  const { mutateAsync: handleGetOnePlatform, error } = useGetOnePlataform();
  const [data, setData] = useState<any>('');

  const getOnePlatform = useCallback( async(data: any) => {
    try {
      const platform = await handleGetOnePlatform(data);
      setData(platform.data);
      return;
    } catch (err) {
      console.log('err: ', err);
      return undefined;
    }
  }, []);

  useEffect(() => {
    getOnePlatform(datasource?.id);
  }, []);

  return (
    <div className="streaming_container">
      <div className="straming_header">
        <h3>{datasource?.name}</h3>
        <h4>Ver mais</h4>
      </div>
      <div className="streaming_cards">
        {data && data.map((serie: any) => (
          <Card datasource={serie}/>
        ))}
      </div>
    </div>
  );
}
