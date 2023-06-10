import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useLogin } from "../../api/client";
import Logo from "../../assets/watchme-logo.svg";
import "./styles.scss";

export interface IInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function SignIn() {
  const { register, handleSubmit } = useForm<IInputs>({
    resolver: yupResolver(schema),
  });
  const { mutateAsync: handleLogin, error } = useLogin();
  const navigate = useNavigate();

  const login = useCallback(async (data: any) => {
    try {
      const user = await handleLogin(data);

      localStorage.setItem(
        "user",
        JSON.stringify({
          token: user.data.token,
          id: user.data.id,
        })
      );

      navigate("/");

      return;
    } catch (err) {
      toast.error("Email e/ou senha inválidos.");
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await login(data);
  };

  return (
    <div className="login_container">
      <div className="login_logo">
        <img src={Logo} alt="Logo Watch Me" />
        <h1>Watch Me</h1>
      </div>
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login_form_content">
          <h2>Login</h2>
          <div className="login_form_input">
            <input
              className={error ? "red" : ""}
              placeholder="E-mail*"
              {...register("email", { required: true })}
            />
            <input
              className={error ? "red" : ""}
              type="password"
              placeholder="Senha*"
              {...register("password", { required: true })}
            />
          </div>
          <div className="login_form_button">
            <button type="submit">Entrar</button>
            <a
              className="login_text_link"
              href="mailto:no-reply@watchme.com?subject=Suporte&body=Tive problema no login e gostaria de tirar dúvida sobre..."
            >
              Precisa de Ajuda?
            </a>
          </div>
        </div>
        <a className="login_text_link" href="/cadastro">
          Não tem uma conta? <strong>Cadastre-se</strong>
        </a>
      </form>
    </div>
  );
}
