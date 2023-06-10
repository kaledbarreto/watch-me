import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useAddPlatform, useGetPlatform } from "../../api/client";
import "./styles.scss";

export interface IInputs {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
});

export function AddStreaming({ setOpenDrawerAddStreaming, setData }: any) {
  const { register, handleSubmit } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { mutateAsync: handleAddPlatform } = useAddPlatform();
  const { mutateAsync: handleGetPlatform } = useGetPlatform();

  const addPlatform = useCallback(async (data: any) => {
    try {
      await handleAddPlatform(data);
      toast.success("Plataforma adicionada com sucesso!");
      return;
    } catch (err) {
      console.log("err: ", err);
      toast.error("Erro ao adicionar a plataforma.");
      return undefined;
    }
  }, []);

  const getAllPlatform = useCallback(async () => {
    try {
      const platform = await handleGetPlatform();
      setData(platform.data);
      return;
    } catch (err) {
      console.log("err: ", err);
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await addPlatform(data);
    getAllPlatform();
    handleCancel();
  };

  const handleCancel = () => {
    setOpenDrawerAddStreaming(false);
  };

  return (
    <div className="modal-backdrop">
      <form className="modal-card" onSubmit={handleSubmit(onSubmit)}>
        <h1>Adicionar uma plataforma</h1>
        <input placeholder="Nome*" {...register("name", { required: true })} />
        <div className="modal-buttons">
          <button className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="send" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
