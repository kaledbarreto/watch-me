import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDeleteSerie } from '../../api/client';
import './styles.scss';

export function DeleteModalSerie({ setOpenDrawerDelete, id }: any) {
  const { mutateAsync: handleDeleteSerie } = useDeleteSerie();
  const navigate = useNavigate();

  const deleteSerie = useCallback( async(id: any) => {
    try {
      const res = await handleDeleteSerie(id);
      toast.success('Deletado com sucesso!');

      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return res;
    } catch (err) {
      console.log('err: ', err);
      toast.error('Erro ao deletar.');
      return undefined;
    }
  }, []);

  const handleSubmit = async () => {
    await deleteSerie(id);
    navigate('/');
  }

  const handleCancel = () => {
    setOpenDrawerDelete(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h1>Tem certeza que deseja excluir?</h1>
        <div className="modal-buttons">
          <button className="cancel" onClick={handleCancel}>Cancelar</button>
          <button className="send" onClick={handleSubmit}>Deletar</button>
        </div>
      </div>
    </div>
  );
};