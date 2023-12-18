import { useUsers } from '../../hooks/users.hooks';
import { LogoutButton } from '../logoutButton/logout.button';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export function Header() {
  const { loginLoadState } = useUsers();
  return (
    <>
      {loginLoadState !== 'logged' && (
        <header className={styles.header}>
          <div className={styles.logotipo}>
            <Link to={'/home'}>
              <img src="../../../logo.png" alt="Logo de monumento" width={50} />{' '}
            </Link>
          </div>
          <div className={styles.enunciado}>
            <h1>Monuments Social Club</h1>
          </div>
          <div className={styles.headerButtons}>
            <LogoutButton></LogoutButton>
          </div>
        </header>
      )}

      {loginLoadState === 'logged' && (
        <header className={styles.header}>
          <Link to={'/home'}>
            <div className={styles.logotipo}>
              <img src="../../../logo.png" alt="Logo de monumento" width={50} />
              <h1>Monuments Social Club</h1>
            </div>
          </Link>
          <div className={styles.headerButtons}>
            <Link to={'/home'}>
              <LogoutButton></LogoutButton>
            </Link>
          </div>
        </header>
      )}
    </>
  );
}
