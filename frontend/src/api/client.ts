import { useMutation } from "react-query"
import { api } from "."

export function useLogin() {
  return useMutation(['handleLogin'], async (data: any) =>
    await api.post('/login', { ...data})
  );
}

export function useRegistration() {
  return useMutation(['handleRegistration'], async (data: any) =>
    await api.post('user/register', { ...data})
  );
}