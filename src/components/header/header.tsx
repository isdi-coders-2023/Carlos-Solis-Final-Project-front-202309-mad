import { LogoutButton } from '../logoutButton/logout.button';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logotipo}>
        <img src="logo.png" alt="Logo de monumento" width={50} />
        <h1>Lista de monumentos</h1>
      </div>
      <div className={styles.headerButtons}>
        <LogoutButton></LogoutButton>
      </div>
    </header>
  );
}
