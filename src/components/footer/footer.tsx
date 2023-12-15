import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logotipo}>
          <p>@Monuments Social Club </p>
          <Link to="../../../pages/home.page.tsx">
            <img
              src="../../../public/logo.png"
              alt="Logo de monumento"
              width={50}
            />{' '}
          </Link>
        </div>
      </div>
    </>
  );
}
