import React, { useCallback, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isAdmin, useGetFavorite, useGetPlatform } from "../../api/client";
import Logout from "../../assets/logout.svg";
import Logo from "../../assets/watchme-logo.svg";
import { AddStreaming } from "../../components/AddStreamingModal";
import { FavoriteList } from "../../components/FavoriteList";
import { LogoutModal } from "../../components/LogoutModal";
import { StreamingList } from "../../components/StreamingList";
import { StreamingListLoading } from "../../components/StreamingListLoading";
import "./styles.scss";

export const Context = React.createContext<any>({});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const { mutateAsync: handleGetFavorite } = useGetFavorite();
  const [favorites, setFavorites] = useState<any>("");

  const updateFavorites = useCallback(async () => {
    try {
      const favorite = await handleGetFavorite();

      setFavorites(favorite.data);
      return;
    } catch (err) {
      console.log("err: ", err);

      return undefined;
    }
  }, []);

  useEffect(() => {
    updateFavorites();
  }, []);

  return (
    <Context.Provider value={{ favorites, setFavorites, updateFavorites }}>
      {children}
    </Context.Provider>
  );
}

export function Home() {
  const { mutateAsync: handleGetPlatform } = useGetPlatform();

  const { favorites } = useContext(Context);

  const { register, handleSubmit } = useForm<{ name: string }>();
  const [data, setData] = useState<any>("");
  const [openDrawerLogout, setOpenDrawerLogout] = useState<boolean>(false);
  const [openDrawerAddStreaming, setOpenDrawerAddStreaming] =
    useState<boolean>(false);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

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

  useEffect(() => {
    getAllPlatform().then(() => setIsFetching(false));
  }, []);

  const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
    navigate(`/search?name=${data.name}`);
  };

  return (
    <div className="home_container">
      <div className="home_header">
        <img className="home_logo" src={Logo} alt="Logo Watch me" />
        <form className="home_form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="home_input"
            type="text"
            placeholder="Busque uma série"
            {...register("name")}
          />
        </form>
        <div className="home_header_buttons">
          {isAdmin() && (
            <button
              className="home_admin_add_platform"
              onClick={() => setOpenDrawerAddStreaming(true)}
            >
              Adicionar Streaming
            </button>
          )}
          <div
            className="home_logout"
            onClick={() => setOpenDrawerLogout(true)}
          >
            <img src={Logout} alt="Sair" />
          </div>
        </div>
      </div>
      {Boolean(favorites?.length) && <FavoriteList datasource={favorites} />}
      {isFetching
        ? [1, 2, 3].map((i) => <StreamingListLoading key={i} />)
        : data &&
          data.map((streaming: any) => (
            <StreamingList key={streaming.id} datasource={streaming} />
          ))}
      {openDrawerLogout && (
        <LogoutModal setOpenDrawerLogout={setOpenDrawerLogout} />
      )}
      {openDrawerAddStreaming && (
        <AddStreaming
          setOpenDrawerAddStreaming={setOpenDrawerAddStreaming}
          setData={setData}
        />
      )}
    </div>
  );
}
