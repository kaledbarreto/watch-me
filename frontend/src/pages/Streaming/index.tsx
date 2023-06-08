import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isAdmin, useGetOnePlataform } from '../../api/client';
import backArrow from '../../assets/back-arrow.svg';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import { Card } from '../../components/Card';
import { LogoutModal } from '../../components/LogoutModal';
import './styles.scss';

export function StreamingDetails() {
  const { id, title } = useParams<{ id: string, title: string }>();
  const { mutateAsync: handleGetOnePlatform, error } = useGetOnePlataform();
  const [data, setData] = useState<any>('');
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const [openDrawerEdit, setOpenDrawerEdit] = useState<boolean>(false);
  const [openDrawerDelete, setOpenDrawerDelete] = useState<boolean>(false);

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
    getOnePlatform(id);
  }, []);

  return (
    <div className="streaming_details_container">
      <div className='streaming_details_heading'>
        <div className="streaming_details_back_title">
          <img src={backArrow} alt="Voltar" />
          <h3>{title}</h3>
        </div>
        <div className='streaming_details_group'>
          {isAdmin() && (
            <div className='streaming_details_admin_group'>
              <button className='streaming_details_admin_add_serie'>Adicionar Serie</button>
              <div className='streaming_details_button'>
                <img src={Trash} alt="Editar" />
              </div>
              <div className='streaming_details_button'>
                <img src={Edit} alt="Editar" />
              </div>
            </div>
          )}
          {/* <div className='streaming_details_button' onClick={() => setOpenDrawerLogout(true)}>
            <img  src={Logout} alt="Sair" />
          </div> */}
        </div>
      </div>
      <div className="streaming_details_cards">
        {data && data.map((serie: any) => (
          <Card datasource={serie}/>
        ))}
      </div>
      {openDrawerLogout && <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout}/>}
    </div>
  );
}