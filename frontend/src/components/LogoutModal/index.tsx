import React, { useState } from 'react';
import './styles.scss';

export function Logout({ isOpen, onClose }: any) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Lógica para enviar o valor do input
    console.log('Valor do input:', inputValue);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h1>Tem certeza que deseja sair?</h1>
        <div className="modal-buttons">
          <button className="send" onClick={handleSubmit}>Enviar</button>
          <button className="cancel" onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};