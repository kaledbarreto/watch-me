import { useMutation } from "react-query";
import { api } from ".";

export function useRegistration() {
  return useMutation(
    ["handleRegistration"],
    async (data: any) => await api.post("user/register", { ...data })
  );
}

export function useLogin() {
  return useMutation(
    ["handleLogin"],
    async (data: any) => await api.post("/login", { ...data })
  );
}

export function logout() {
  localStorage.removeItem("user");
  window.location.reload();
}

export function isAdmin() {
  const user = JSON.parse(localStorage.getItem("user") ?? "");
  return user.id === "admin";
}

export function useGetPlatform() {
  return useMutation(
    ["handleGetPlatform"],
    async () => await api.get("/platform")
  );
}

export function useGetOnePlataform() {
  return useMutation(
    ["handleGetOnePlatform"],
    async (id: any) => await api.get(`/platform/${id}`)
  );
}

export function useAddPlatform() {
  return useMutation(
    ["handleAddPlatform"],
    async (data: any) => await api.post(`/platform/create`, { ...data })
  );
}

export function useEditPlatform() {
  return useMutation(
    ["handleEditPlatform"],
    async (data: any) =>
      await api.put(`/platform/edit/${data.id}`, { ...data.data })
  );
}

export function useDeletePlatform() {
  return useMutation(
    ["handleDeletePlatform"],
    async (id: any) => await api.delete(`/platform/delete/${id}`)
  );
}

export function useGetSerie() {
  return useMutation(
    ["handleGetSerie"],
    async (id: any) => await api.get(`/serie/${id}`)
  );
}

export function useCheckSerieIsLiked() {
  return useMutation(
    ["handleCheckSerieIsLiked"],
    async (id: any) => await api.get(`/serie/check_liked/${id}`)
  );
}

export function useAddSerie() {
  return useMutation(
    ["handleAddSerie"],
    async (data: any) => await api.post(`/serie/create`, { ...data })
  );
}

export function useEditSerie() {
  return useMutation(
    ["handleEditSerie"],
    async (data: any) =>
      await api.put(`/serie/edit/${data.id}`, { ...data.data })
  );
}

export function useDeleteSerie() {
  return useMutation(
    ["handleDeleteSerie"],
    async (id: any) => await api.delete(`/serie/delete/${id}`)
  );
}

export function useSearchSerie() {
  return useMutation(
    ["handleAddSerie"],
    async (data: any) => await api.post(`/serie/search`, { ...data })
  );
}

export function useGetFavorite() {
  return useMutation(
    ["handleGetFavorite"],
    async () => await api.get("/favorites")
  );
}

export function useFavorite() {
  return useMutation(
    ["handleFavorite"],
    async (id) => await api.post(`/favorite/${id}`)
  );
}

export function useUnfavorite() {
  return useMutation(
    ["handleUnfavorite"],
    async (id) => await api.post(`/unfavorite/${id}`)
  );
}
