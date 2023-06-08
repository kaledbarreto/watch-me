import { useMutation } from "react-query"
import { api } from "."

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