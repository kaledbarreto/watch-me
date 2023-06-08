import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useEditPlatform, useGetOnePlataform } from '../../api/client';
import './styles.scss';

export interface IInputs {
  name: string,
}

const schema = yup.object().shape({
  name: yup.string().required(),
});

export function EditStreaming({ setOpenDrawerEdit, id, setData }: any) {
  const { register, handleSubmit } = useForm<IInputs>({resolver: yupResolver(schema)});
  const { mutateAsync: handleEditPlatform } = useEditPlatform();
  const { mutateAsync: handleGetOnePlatform } = useGetOnePlataform();

  const editPlatform = useCallback( async({id, data} : any) => {
    try {
      await handleEditPlatform({id, data});
      toast.success('Plataforma editada com sucesso!');
      return;
    } catch (err) {
      console.log('err: ', err);
      toast.error('Erro ao editar plataforma.');
      return undefined;
    }
  }, []);

  const getOnePlatform = useCallback( async(data: any) => {
    try {
      const platform = await handleGetOnePlatform(data);
      console.log(platform);
      setData(platform.data);
      return;
    } catch (err) {
      console.log('err: ', err);
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await editPlatform({id: id, data});
    await getOnePlatform(id);
    handleCancel();
  };

  const handleCancel = () => {
    setOpenDrawerEdit(false);
  };

  return (
    <div className="modal-backdrop">
      <form className="modal-card" onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar uma serie</h1>
          <input 
            placeholder='Nome*' 
            {...register("name", {required: true})}
          />
        <div className="modal-buttons">
          <button className="cancel" onClick={handleCancel}>Cancelar</button>
          <button className="send" type='submit'>Salvar</button>
        </div>
      </form>
    </div>
  );
};