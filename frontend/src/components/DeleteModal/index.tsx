import React, { useCallback, useState } from 'react';
import './styles.scss';
import { useDeletePlatform } from '../../api/client';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function DeleteModal({ setOpenDrawerDelete, id }: any) {
  const { mutateAsync: handleDeletePlatform } = useDeletePlatform();
  const navigate = useNavigate();

  const deletePlatform = useCallback( async(id: any) => {
    try {
      const res = await handleDeletePlatform(id);
      toast.success('Deletado com sucesso!');
      return res;
    } catch (err) {
      console.log('err: ', err);
      toast.error('Erro ao deletar.');
      return undefined;
    }
  }, []);

  const handleSubmit = async () => {
    await deletePlatform(id);
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