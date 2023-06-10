import { useState } from "react";
import { DeleteModalSerie } from "../DeleteModalSerie";
import { EditSerie } from "../EditSerieModal";
import { GetSerieModal } from "../GetSerieModal";
import "./styles.scss";

export function Card(datasource: any) {
  const [imageError, setImageError] = useState(false);
  const [openDrawerSerie, setOpenDrawerSerie] = useState(false);
  const [openDrawerSerieEdit, setOpenDrawerSerieEdit] =
    useState<boolean>(false);
  const [openDrawerSerieDelete, setOpenDrawerSerieDelete] =
    useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCancel = () => setOpenDrawerSerie(false);

  return (
    <div>
      <div className="container-card" onClick={() => setOpenDrawerSerie(true)}>
        <div className="card_image_container">
          {!imageError ? (
            <img
              className="film-image"
              src={datasource.datasource.image_url}
              onError={handleImageError}
              alt={datasource.datasource.name}
            />
          ) : (
            <img
              className="film-image"
              src={"https://fakeimg.pl/240x240?text=;-;"}
              alt="Placeholder"
            />
          )}
        </div>
        <div className="film-title">
          <span>{datasource.datasource.name}</span>
        </div>
      </div>
      <div>
        {openDrawerSerie && (
          <GetSerieModal
            handleCancel={handleCancel}
            setOpenDrawerSerieEdit={setOpenDrawerSerieEdit}
            setOpenDrawerSerieDelete={setOpenDrawerSerieDelete}
            datasource={datasource.datasource}
          />
        )}
        {openDrawerSerieEdit && (
          <EditSerie
            setOpenDrawerSerieEdit={setOpenDrawerSerieEdit}
            id={datasource.datasource.id}
            datasource={datasource.datasource}
          />
        )}
        {openDrawerSerieDelete && (
          <DeleteModalSerie
            setOpenDrawerDelete={setOpenDrawerSerieDelete}
            id={datasource.datasource.id}
          />
        )}
      </div>
    </div>
  );
}
