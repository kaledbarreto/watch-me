import './styles.scss';
import Heart from '../../assets/heart.svg';

interface ICard {
  image: string;
  title: string;
}

export function Card({image, title}: ICard) {
  return (
    <div className="container-card">
      <img className='heart-red' src={Heart} alt="Like" />
      <img className='film-image' src={image} alt="Filme" />
      <div className='film-title'>
        <span>
          {title}
        </span>
      </div>
    </div>
  );
}