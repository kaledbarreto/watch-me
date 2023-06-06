import { useMutation } from "react-query"
import { publicApi } from "."

export function useLogin() {

  return useMutation(['handleLogin'], async (data: any) => {
    console.log(data);
    await publicApi.post('/login', { ...data})}
  );
}