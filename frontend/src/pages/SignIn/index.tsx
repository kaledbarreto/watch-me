import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useLogin } from '../../api/client';
import Logo from '../../assets/watchme-logo.svg';
import './styles.scss';

export interface IInputs {
  email: string,
  password: string,
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>({resolver: yupResolver(schema)});
  const { mutateAsync: handleLogin, isLoading: isLoadingLogin, error } = useLogin();
  const navigate = useNavigate();

  const login = useCallback( async(data: any) => {
    try {
      const token = await handleLogin(data);

      localStorage.setItem('token', JSON.stringify({
        token: token.data.token,
      }));

      navigate('/home');

      return;
    } catch (err) {
      toast.error('Email e/ou senha inválidos.');
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await login(data);
  };

  return (
    <div className='container-login'>
      <div className='logo-container'>
        <img src={Logo} alt="Logo Watch Me" />
        <h1>Watch Me</h1>
      </div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-container'>
          <h2>Login</h2>
          <div className='form-input'>
            <input 
              className={error ? 'red' : ''}
              placeholder='E-mail*' 
              {...register("email", {required: true})}
            />
            <input
              className={error ? 'red' : ''} 
              type='password'
              placeholder='Senha*'
              {...register("password", {required: true})}
            />
          </div>
          <div className='form-button'>
            <button type='submit'>Entrar</button>
            <a className='text-link' href="mailto:no-reply@watchme.com?subject=Suporte&body=Tive problema no login e gostaria de tirar dúvida sobre...">Precisa de Ajuda?</a>
          </div>
        </div>
        <a className='text-link' href="/cadastro">Não tem uma conta? <strong>Cadastre-se</strong></a>
      </form>
    </div>
  );
}
