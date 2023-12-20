import { SyntheticEvent, useEffect, useState } from 'react';
import styles from './login.module.scss';
import { useUsers } from '../../hooks/users.hooks';
import { LoginUser } from '../../entities/user';
import { Link, useNavigate } from 'react-router-dom';
export function Login() {
  const navigate = useNavigate();
  const [hasLogin, setHasLogin] = useState(false);
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('passwd')?.toString() as string,
    };
    login(loginUser);
    setHasLogin(true);
  };
  useEffect(() => {
    if (hasLogin) {
      navigate('/home');
    } else if (!hasLogin) {
      navigate('/');
    }
  }, [hasLogin, navigate]);
  return (
    <div className={styles.loginForm}>
      {!hasLogin && (
        <form onSubmit={handleSubmit} role="form">
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="passwd"
            placeholder="Password"
            required
          />

          <button className="submit-button" type="submit" role="button">
            Iniciar sesión
          </button>

          <p>Si no estás registrado, regístrate!</p>
          <div className="register-link-button">
            <Link to={'/register'}>
              <button type="button">Registrarse</button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
