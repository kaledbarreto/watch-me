import { useCallback, useEffect, useState } from 'react';
import { isAdmin, useGetPlatform } from '../../api/client';
import Logout from '../../assets/logout.svg';
import Logo from '../../assets/watchme-logo.svg';
import { LogoutModal } from '../../components/LogoutModal';
import { StreamingList } from '../../components/StreamingList';
import './styles.scss';

export function Home() {
  const { mutateAsync: handleGetPlatform } = useGetPlatform();
  const [data, setData] = useState<any>('');
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const [openDrawerAddStreaming, setOpenDrawerAddStreaming]= useState<boolean>(false);

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
      {data && data.map((streaming: any) => (
        <StreamingList datasource={streaming}/>
      ))}
      {openDrawerLogout && <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout}/>}
    </div>
  );
}