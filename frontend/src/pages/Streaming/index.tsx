import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAdmin, useDeletePlatform, useEditPlatform, useGetOnePlataform } from '../../api/client';
import backArrow from '../../assets/back-arrow.svg';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import { Card } from '../../components/Card';
import { LogoutModal } from '../../components/LogoutModal';
import './styles.scss';
import toast from 'react-hot-toast';

export function StreamingDetails() {
  const { id, title } = useParams<{ id: string, title: string }>();
  const { mutateAsync: handleGetOnePlatform } = useGetOnePlataform();
  const { mutateAsync: handleEditPlatform } = useEditPlatform();
  const { mutateAsync: handleDeletePlatform } = useDeletePlatform();
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

  // console.log(id);
  const navigate = useNavigate();

  function letItGo(data: any){
    navigate(`/streaming/${data.data.name}/${id}`);
  }

  const editPlatform = useCallback( async({id, data} : any) => {
    
    try {
      const platform = await handleEditPlatform({id, data});
      console.log(platform);
      toast.success('Plataforma editada com sucesso!');
      letItGo(data);
      return;
    } catch (err) {
      console.log('err: ', err);
      toast.error('Erro ao editar plataforma.');
      return undefined;
    }
  }, []);

  const deletePlatform = useCallback( async(id: any) => {
    
    try {
      const platform = await handleEditPlatform({id, data});
      console.log(platform);
      toast.success('Plataforma editada com sucesso!');
      letItGo(data);
      return;
    } catch (err) {
      console.log('err: ', err);
      toast.error('Erro ao editar plataforma.');
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
              <div className='streaming_details_button' onClick={() => editPlatform({id, data: {name: 'zzzz'}})}>
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