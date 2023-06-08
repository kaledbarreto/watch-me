import './styles.scss';
import Logo from '../../assets/watchme-logo.svg';
import Logout from '../../assets/logout.svg';
import { StreamingList } from '../../components/StreamingList';
import { AddStreamingModal } from '../../components/AddStramingModal';
import { AddStreamingSerie } from '../../components/AddStramingSerie';
import { EditStreamingSerie } from '../../components/EditStreamingModal';
import { isAdmin, logout, useGetPlatform } from '../../api/client';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { LogoutModal } from '../../components/LogoutModal';

export function Home() {
  const { mutateAsync: handleGetPlatform, error } = useGetPlatform();
  const [data, setData] = useState<any>('');
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const [openDrawerAddStreaming, setOpenDrawerAddStreaming]= useState<boolean>(false);
  const navigate = useNavigate();

  const getAllPlatform = useCallback(async () => {
    try {
      const platform = await handleGetPlatform();
      setData(platform.data);
      return;
    } catch (err) {
      console.log('err: ', err);
      return undefined;
    }
  }, []);

  useEffect(() => {
    getAllPlatform();
  }, []);



  return (
    <div className='home_container'>
      <div className='home_header'>
        <img className='home_logo' src={Logo} alt="Logo Watch me" />
        <input className='home_input' type="text" placeholder='Busque uma série'/>
        <div className='home_header_buttons'>
          {isAdmin() && <button className='home_admin_add_platform' onClick={() => setOpenDrawerAddStreaming(true)}>Adicionar Streaming</button>}
          <div className='home_logout' onClick={() => setOpenDrawerLogout(true)}>
            <img src={Logout} alt="Sair" />
          </div>
        </div>
      </div>
      <StreamingList title='Netflix 1'/>
      <StreamingList title='Netflix 2'/>
      <StreamingList title='Netflix 3'/>
      {openDrawerLogout && <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout}/>}
      {openDrawerAddStreaming && <AddStreamingModal/>}
      {/* <AddStreamingSerie/> */}
      {/* <EditStreamingSerie/> */}
      {/* <EditStreamingSerie/> */}
    </div>
  );
}