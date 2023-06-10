import { useCallback, useContext, useEffect, useState } from "react";
import {
  isAdmin,
  useCheckSerieIsLiked,
  useFavorite,
  useUnfavorite,
} from "../../api/client";
import close from "../../assets/close-btn.svg";
import Edit from "../../assets/edit.svg";
import HeartRed from "../../assets/heart-red.svg";
import HeartWhite from "../../assets/heart-white.svg";
import Loading from "../../assets/loading.svg";
import Trash from "../../assets/trash.svg";
import { Context } from "../../pages/Home";
import "./styles.scss";

interface IGetSerieModalProps {
  handleCancel: any;
  datasource: any;
  setOpenDrawerSerieEdit: any;
  setOpenDrawerSerieDelete: any;
}

export function GetSerieModal({
  handleCancel,
  setOpenDrawerSerieEdit,
  setOpenDrawerSerieDelete,
  datasource,
}: IGetSerieModalProps) {
  const { mutateAsync: handleCheckSerieIsLiked } = useCheckSerieIsLiked();
  const { mutateAsync: handleFavorite } = useFavorite();
  const { mutateAsync: handleUnfavorite } = useUnfavorite();
  const [imageError, setImageError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { updateFavorites } = useContext(Context);

  const switchLiked = async () => {
    setIsFetching(true);

    if (isLiked) {
      await handleUnfavorite(datasource.id);
      handleCancel();
    } else {
      await handleFavorite(datasource.id);
    }

    updateFavorites().then(() => {
      setIsLiked(!isLiked);
      setIsFetching(false);
    });
  };

  const getIsLiked = useCallback(async (id: string) => {
    try {
      const serie = await handleCheckSerieIsLiked(id);

      setIsLiked(serie.data.isLiked);
      return;
    } catch (err) {
      console.log("err: ", err);
      return undefined;
    }
  }, []);

  useEffect(() => {
    getIsLiked(datasource?.id).then(() => {
      setIsFetching(false);
    });
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleOpenEdit = () => {
    setOpenDrawerSerieEdit(true);
  };

  const handleOpenDelete = () => {
    setOpenDrawerSerieDelete(true);
  };

  return (
    <div className="modal_backdrop">
      <div className="serie_modal_card">
        <div className="serie_image_container">
          {!imageError ? (
            <img
              className="serie_image_container"
              src={datasource.image_url}
              onError={handleImageError}
              alt={datasource.name}
            />
          ) : (
            <img
              className="serie_image_container"
              src={"https://fakeimg.pl/480x480?text=;-;"}
              alt="Placeholder"
            />
          )}
          <img
            className="close_btn"
            src={close}
            onClick={handleCancel}
            alt="Close"
          />
        </div>
        <div className="serie_container">
          <div className="serie_container_heading">
            <h1>{datasource.name}</h1>
            <div className="streaming_details_group">
              {isAdmin() && (
                <div className="streaming_details_admin_group">
                  <div
                    className="streaming_details_button"
                    onClick={handleOpenDelete}
                  >
                    <img src={Trash} alt="Deletar" />
                  </div>
                  <div
                    className="streaming_details_button"
                    onClick={handleOpenEdit}
                  >
                    <img src={Edit} alt="Editar" />
                  </div>
                </div>
              )}
              <div className="streaming_details_button" onClick={switchLiked}>
                <img
                  className="heart-white"
                  src={isFetching ? Loading : isLiked ? HeartRed : HeartWhite}
                  alt="Like"
                />
              </div>
            </div>
          </div>
          <div className="description_container">
            <p>{datasource.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
