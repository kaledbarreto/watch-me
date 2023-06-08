import './styles.scss';
import Heart from '../../assets/heart.svg';

interface ICard {
  datasrouce: any;
}

export function Card(datasource: any) {
  return (
    <div className="container-card">
      <img className='heart-red' src={Heart} alt="Like" />
      <img className='film-image' src={datasource.datasource.image_url} alt={datasource.datasource.name} />
      <div className='film-title'>
        <span>
          {datasource.datasource.name}
        </span>
      </div>
    </div>
  );
}