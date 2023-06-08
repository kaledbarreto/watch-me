import { logout } from '../../api/client';
import './styles.scss';

export function LogoutModal({ setOpenDrawerLogout }: any) {
  const handleCancel = () => {
    setOpenDrawerLogout(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h1>Tem certeza que deseja sair?</h1>
        <div className="modal-buttons">
          <button className="cancel" onClick={handleCancel}>Cancelar</button>
          <button className="send" onClick={logout}>Sair</button>
        </div>
      </div>
    </div>
  );
};