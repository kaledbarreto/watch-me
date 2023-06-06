import './styles.scss';
import Logo from '../../assets/watchme-logo.svg';
import Logout from '../../assets/logout.svg';
import { StreamingList } from '../../components/StreamingList';
import { AddStreamingModal } from '../../components/AddStramingModal';
import { AddStreamingSerie } from '../../components/AddStramingSerie';
import { EditStreamingSerie } from '../../components/EditStreamingModal';

export function Home() {
  return (
    <div className='container'>
      <div className='header'>
        <img className='logo' src={Logo} alt="Logo Watch me" />
        <input type="text" placeholder='Busque uma série'/>
        <div className='logout'>
          <img  src={Logout} alt="Sair" />
        </div>
      </div>
      <StreamingList title='Netflix 1'/>
      <StreamingList title='Netflix 2'/>
      <StreamingList title='Netflix 3'/>
      {/* <AddStreamingModal/> */}
      {/* <AddStreamingSerie/> */}
      {/* <EditStreamingSerie/> */}
      <EditStreamingSerie/>
    </div>
  );
}