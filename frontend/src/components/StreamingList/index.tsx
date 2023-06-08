import { Card } from "../Card";
import './styles.scss';

interface IStreamingSmallList {
  datasource: any;
}

export function StreamingList({datasource}: IStreamingSmallList) {
  return (
    <div className="container_small">
      <div className="straming_list_header">
        <h3>{datasource?.name}</h3>
        <h4>Ver mais</h4>
      </div>
      {/* Implementar map aqui */}
      <div className="cards_container">
        <Card 
          image='https://i1.sndcdn.com/artworks-tgv8g79lCjqD1WsV-i3K1jQ-t500x500.jpg'
          title='Lobo mau 2'
        />
        <Card 
          image='https://i1.sndcdn.com/artworks-tgv8g79lCjqD1WsV-i3K1jQ-t500x500.jpg'
          title='Lobo mau 2'
        />
        <Card 
          image='https://i1.sndcdn.com/artworks-tgv8g79lCjqD1WsV-i3K1jQ-t500x500.jpg'
          title='Lobo mau 2'
        />
        <Card 
          image='https://i1.sndcdn.com/artworks-tgv8g79lCjqD1WsV-i3K1jQ-t500x500.jpg'
          title='Lobo mau 2'
        />
        <Card 
          image='https://i1.sndcdn.com/artworks-tgv8g79lCjqD1WsV-i3K1jQ-t500x500.jpg'
          title='Lobo mau 2'
        />
      </div>
    </div>
  );
}