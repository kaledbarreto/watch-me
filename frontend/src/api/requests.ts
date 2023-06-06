import { useCallback } from "react";
import { useLogin } from "./client";

const { mutateAsync: handleLogin, isLoading: isLoadingLogin } = useLogin();

export const login = useCallback(async (data: any) => {
    try {
      const user = handleLogin(data);
      console.log(user);
      return user;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }, []);