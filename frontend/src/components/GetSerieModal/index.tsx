import { useState } from 'react';
import './styles.scss';
import close from '../../assets/close-btn.svg';
import { isAdmin } from '../../api/client';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import HeartWhite from '../../assets/heart-white.svg';
import { EditSerie } from '../EditSerieModal';

interface IGetSerieModalProps {
  handleCancel: () => void;
  datasource: any;
  setOpenDrawerSerieEdit: any;
};

export function GetSerieModal({ handleCancel, setOpenDrawerSerieEdit, datasource }: IGetSerieModalProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleOpenEdit = () => {
    // handleCancel(); --> Por causa do outro bug tive q por um modal em cima do outro já que o outro n fecha normalmente :p
    setOpenDrawerSerieEdit(true);
  }

  return (
    <div className="modal_backdrop">
      <div className='serie_modal_card'>
        <div className='serie_image_container'>
          {!imageError ? (
            <img className='serie_image_container' src={datasource.image_url} onError={handleImageError} alt={datasource.name} />
          ) : (
            <img className='serie_image_container' src={'https://fakeimg.pl/480x480?text=;-;'} alt="Placeholder" />
          )}
          <img className='close_btn' src={close} onClick={handleCancel} alt="Close" />
        </div>
        <div className='serie_container'>
          <div className='serie_container_heading'>
            <h1>{datasource.name}</h1>
            <div className='streaming_details_group'>
              {isAdmin() && (
                <div className='streaming_details_admin_group'>
                  <div className='streaming_details_button'>
                    <img src={Trash} alt="Deletar" />
                  </div>
                  <div className='streaming_details_button'>
                    <img src={Edit} alt="Editar" onClick={handleOpenEdit}/>
                  </div>
                </div>
              )}
              <div className='streaming_details_button'>
                <img className='heart-white' src={HeartWhite} alt="Like" />
              </div>
            </div>
          </div>
          <div className='description_container'>
            <p>{datasource.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};