import './styles.scss';
import Heart from '../../assets/heart.svg';
import { useState } from 'react';
import { GetSerieModal } from '../GetSerieModal';

export function Card(datasource: any) {
  const [imageError, setImageError] = useState(false);
  const [openDrawerSerie, setOpenDrawerSerie] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCancel = () => {
    setOpenDrawerSerie(false); //Não funciona essa caceta =)
    window.location.reload();
  };

  return (
    <div className="container-card" onClick={() => setOpenDrawerSerie(true)}>
      <img className='heart' src={Heart} alt="Like" />
      {!imageError ? (
        <img className='film-image' src={datasource.datasource.image_url} onError={handleImageError} alt={datasource.datasource.name} />
      ) : (
        <img className='film-image' src={'https://fakeimg.pl/240x240?text=;-;'} alt="Placeholder" />
      )}
      <div className='film-title'>
        <span>
          {datasource.datasource.name}
        </span>
      </div>
      {openDrawerSerie && <GetSerieModal handleCancel={handleCancel} datasource={datasource.datasource}/>}
    </div>
  );
}