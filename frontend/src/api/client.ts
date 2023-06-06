import { useMutation } from "react-query"
import { api } from "."

export function useLogin() {

  return useMutation(['handleLogin'], async (data: any) =>
    await api.post('/login', { ...data})
  );
}