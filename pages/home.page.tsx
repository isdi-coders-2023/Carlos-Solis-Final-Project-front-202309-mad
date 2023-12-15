import { Link } from 'react-router-dom';
import styles from './home.page.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={styles.entrada}>
        <p>
          ¡Bievenidos a Social Monument Club! La red social donde podrás ver tus
          monumentos favoritos así como compartir tus opiniones de ellos.
        </p>
      </div>
      <div className={styles.homebuttons}>
        <button type="button">Login</button>
        <button type="button">Register</button>
      </div>
    </>
  );
}
