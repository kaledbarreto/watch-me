import { useState } from 'react';
import './styles.scss';
import close from '../../assets/close-btn.svg';
import { isAdmin } from '../../api/client';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import HeartWhite from '../../assets/heart-white.svg';

interface IGetSerieModalProps {
  handleCancel: () => void;
  datasource: any;
};

export function GetSerieModal({ handleCancel, datasource }: IGetSerieModalProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  console.log(datasource);



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
                    <img src={Trash} alt="Editar" />
                  </div>
                  <div className='streaming_details_button'>
                    <img src={Edit} alt="Editar" />
                  </div>
                </div>
              )}
              <div className='streaming_details_button'>
                <img className='heart-white' src={HeartWhite} alt="Like" />
              </div>
            </div>
          </div>
          <div className='description_container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus quis leo varius vestibulum. Sed libero tellus, tincidunt sit amet lorem et, condimentum mattis nunc. Donec imperdiet, libero ut posuere dignissim, orci libero venenatis purus, in tincidunt risus lectus sed ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pretium nec sem faucibus sollicitudin. Aenean vitae sapien in quam molestie tempor. Donec quis imperdiet nibh. Phasellus maximus sapien quis ultrices malesuada. Donec nunc massa, vehicula eu pellentesque eu, consequat ac ante. Donec feugiat fringilla metus, at maximus nisl consectetur ut. Nam nec aliquam dui. Mauris turpis mauris, egestas nec odio sed, vestibulum efficitur urna. Donec nisi mi, blandit a lacus vitae, euismod vestibulum libero. Proin ligula mi, malesuada non iaculis sed, porttitor vitae dolor. Integer blandit, tortor eu fringilla hendrerit, orci urna vestibulum ligula, eu faucibus enim eros vitae eros. Morbi nec mauris gravida, volutpat eros sed, porttitor neque. Etiam in metus interdum, suscipit ipsum sed, sodales nibh. Phasellus id urna lacus. Sed scelerisque lorem mi, varius rutrum nulla pharetra eget. Mauris egestas nisl eu massa feugiat porttitor. In id tellus lectus. Sed aliquam eu metus eu vulputate. In massa mauris, auctor ut pulvinar quis, rutrum vitae urna. Sed varius lorem ac mi consectetur, sit amet molestie lacus lacinia. Maecenas felis metus, tincidunt vitae fringilla eget, ultrices id ipsum. In posuere mauris nec nisi eleifend commodo. Ut et libero sed nibh rhoncus fermentum a in purus. Sed mollis, lorem vitae sodales interdum, quam justo mollis massa, in malesuada leo urna at sem. Sed convallis, neque eu laoreet malesuada, arcu diam eleifend neque, ac egestas sem sem aliquam arcu. Fusce at accumsan dui. In placerat id tortor vitae pulvinar. Morbi cursus vehicula efficitur. Pellentesque in feugiat turpis. Nunc suscipit convallis neque dignissim hendrerit. Sed at elementum odio. Aliquam sit amet velit lorem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// {datasource.description}