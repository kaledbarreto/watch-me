import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useEditSerie } from "../../api/client";
import "./styles.scss";

export interface IInputs {
  name: string;
  image_url: string;
  description: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  image_url: yup.string().required(),
  description: yup.string().required(),
});

export function EditSerie({ setOpenDrawerSerieEdit, id, datasource }: any) {
  const { register, handleSubmit } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { mutateAsync: handleEditSerie } = useEditSerie();

  const editPlatform = useCallback(async ({ id, data }: any) => {
    try {
      await handleEditSerie({ id, data });
      toast.success("Serie editada com sucesso!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    } catch (err) {
      console.log("err: ", err);
      toast.error("Erro ao editar serie.");
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await editPlatform({ id: id, data });
    handleCancel();
  };

  const handleCancel = () => setOpenDrawerSerieEdit(false);

  return (
    <div className="edit_serie_modal_backdrop">
      <form className="modal-card" onSubmit={handleSubmit(onSubmit)}>
        <h1>Editar uma serie</h1>
        <input
          placeholder="Nome*"
          defaultValue={datasource.name}
          {...register("name", { required: true })}
        />
        <input
          placeholder="URL da Foto*"
          defaultValue={datasource.image_url}
          {...register("image_url", { required: true })}
        />
        <input
          placeholder="Decrição*"
          defaultValue={datasource.description}
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
