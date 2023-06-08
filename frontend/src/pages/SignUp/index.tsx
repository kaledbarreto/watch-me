import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import Logo from '../../assets/watchme-logo.svg';
import './styles.scss';
import { useCallback } from 'react';
import { useRegistration } from '../../api/client';
import { useNavigate } from 'react-router-dom';

export interface IInputs {
  email: string,
  password: string,
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function SignUp() {
  const { register, handleSubmit } = useForm<IInputs>({resolver: yupResolver(schema)});
  const { mutateAsync: handleRegistration, error } = useRegistration();
  const navigate = useNavigate();

  const registration = useCallback( async(data: any) => {
    try {
      const user = await handleRegistration(data);
      console.log(user);

      localStorage.setItem('user', JSON.stringify({
        token: user.data.token,
        id: user.data.id,
      }));

      navigate('/');

      return;
    } catch (err) {
      toast.error('Email e/ou senha inválidos');
      return undefined;
    }
  }, []);

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    await registration(data);
  };

  return (
    <div className='registration_container'>
      <div className='registration_logo'>
        <img src={Logo} alt="Logo Watch Me" />
        <h1>Watch Me</h1>
      </div>
      <form className='registration_form' onSubmit={handleSubmit(onSubmit)}>
          <div className='registration_form_content'>
          <h2>Cadastre-se</h2>
          <div className='registration_form_input'>
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
          <div className='registration_form_button'>
            <button type='submit'>Entrar</button>
            <a className='text-link' href="mailto:no-reply@watchme.com?subject=Suporte&body=Tive problema no cadastro e gostaria de tirar dúvida sobre...">Precisa de Ajuda?</a>
          </div>
        </div>
        <a className='registration_text_link' href="/login">Já tem uma conta? <strong>Login</strong></a>
      </form>
    </div>
  );
}
