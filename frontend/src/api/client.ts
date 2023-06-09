import { useMutation } from "react-query";
import { api } from ".";

// export interface IEditPlatform {
//   id: string,
//   data: any,
// }

export function useRegistration() {
  return useMutation(['handleRegistration'], async (data: any) =>
    await api.post('user/register', { ...data})
  );
}

export function useLogin() {
  return useMutation(['handleLogin'], async (data: any) =>
    await api.post('/login', { ...data})
  );
}

export function logout() {
  localStorage.removeItem('user');
  window.location.reload();
}

export function isAdmin() {
  const user = JSON.parse(localStorage.getItem('user') ?? '');
  return user.id === 'admin';
}

export function useGetPlatform() {
  return useMutation(['handleGetPlatform'], async () =>
    await api.get('/platform')
  );
}

export function useGetOnePlataform() {
  return useMutation(['handleGetOnePlatform'], async (id: any) => 
    await api.get(`/platform/${id}`)
  );
}

export function useAddPlatform() {
  return useMutation(['handleAddPlatform'], async (data: any) =>
    await api.post(`/platform/create`, { ...data})
  );
}

export function useEditPlatform() {
  return useMutation(['handleEditPlatform'], async (data: any) =>
    await api.put(`/platform/edit/${data.id}`, { ...data.data})
  );
}

export function useDeletePlatform() {
  return useMutation(['handleDeletePlatform'], async (id: any) =>
    await api.delete(`/platform/delete/${id}`)
  );
}

export function useAddSerie() {
  return useMutation(['handleAddSerie'], async (data: any) =>
    await api.post(`/serie/create`, { ...data})
  );
}

export function useEditSerie() {
  return useMutation(['handleEditSerie'], async (data: any) =>
    await api.put(`/serie/edit/${data.id}`, { ...data.data})
  );
}

export function useDeleteSerie() {
  return useMutation(['handleDeleteSerie'], async (id: any) =>
    await api.delete(`/serie/delete/${id}`)
  );
}