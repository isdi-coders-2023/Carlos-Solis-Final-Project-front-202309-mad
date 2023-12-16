import styles from './header.module.scss';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logotipo}>
        <Link to="../../components/pages/login.page.tsx">
          <img src="../../../logo.png" alt="Logo de monumento" width={50} />{' '}
        </Link>
      </div>
      <div className={styles.enunciado}>
        <h1>Monuments Social Club</h1>
      </div>
      <div className={styles.headerButtons}></div>
    </header>
  );
}
