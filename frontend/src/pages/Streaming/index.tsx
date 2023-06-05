import { Card } from '../../components/Card';
import backArrow from '../../assets/back-arrow.svg';
import Logout from '../../assets/logout.svg';
import './styles.scss';

interface IStreamingSmallList {
  title: string;
  datasource?: any[];
}

export function StreamingDetails({title, datasource}: IStreamingSmallList) {
  return (
    <div className="container_straming_details">
      <div className='details_heading'>
        <div className="straming_details_list_title">
          <img src={backArrow} alt="`Voltar" />
          <h3>{title}</h3>
        </div>
        <div className='logout'>
          <img  src={Logout} alt="Sair" />
        </div>
      </div>
      {/* Implementar map aqui */}
      <div className="details_cards_container">
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