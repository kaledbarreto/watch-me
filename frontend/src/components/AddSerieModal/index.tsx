import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useAddSerie, useGetOnePlataform } from "../../api/client";
import "./styles.scss";

export interface IInputs {
  name: string;
  image_url: string;
  description: string;
  id: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  image_url: yup.string().required(),
  description: yup.string().required(),
});

export function AddSerie({ setOpenDrawerAddSerie, id, setData }: any) {
  const { register, handleSubmit } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { mutateAsync: handleAddSerie } = useAddSerie();
  const { mutateAsync: handleGetOnePlatform } = useGetOnePlataform();

  const AddSerie = useCallback(async (data: any) => {
    try {
      await handleAddSerie(data);
      toast.success("Serie adicionada com sucesso!");
      return;
    } catch (err) {
      console.log("err: ", err);
      toast.error("Erro ao adicionada a serie.");
      return undefined;
    }
  }, []);

  const getOnePlatform = useCallback(async (data: any) => {
    try {
      const platform = await handleGetOnePlatform(data);
      setData(platform.data);
      return;
    } catch (err) {
      console.log("err: ", err);
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const req = {
      description: data.description,
      image_url: data.image_url,
      name: data.name,
      platform_id: id,
    };

    await AddSerie(req);
    await getOnePlatform(id);
    handleCancel();
  };

  const handleCancel = () => {
    setOpenDrawerAddSerie(false);
  };

  return (
    <div className="edit_serie_modal_backdrop">
      <form className="modal-card" onSubmit={handleSubmit(onSubmit)}>
        <h1>Adicione uma serie nova</h1>
        <input placeholder="Nome*" {...register("name", { required: true })} />
        <input
          placeholder="URL da Foto*"
          {...register("image_url", { required: true })}
        />
        <input
          placeholder="Decrição*"
          {...register("description", { required: true })}
        />
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
