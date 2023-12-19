// MainPage.jsx

import { Link } from 'react-router-dom';
import { List } from '../../components/list/list';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './home.page.module.scss';
import { useEffect } from 'react';
import { useMonuments } from '../../hooks/monuments.hooks';

export default function MainPage() {
  const { monuments } = useSelector((state: RootState) => state.MonumentsState);
  const { loggedUser } = useSelector((state: RootState) => state.UsersState);
  const { loadAllMonuments } = useMonuments();

  useEffect(() => {
    loadAllMonuments();
  }, [loadAllMonuments]);

  const userMonuments = monuments.filter(
    (monument) => monument.author.email === loggedUser?.email
  );

  const category2Monuments = monuments.filter(
    (monument) => monument.category === 'Arab'
  );
  const category3Monuments = monuments.filter(
    (monument) => monument.category === 'Roman'
  );

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.createLinkButton}>
        <Link to={'/create'}>
          <button type="button">Crea monumento</button>
        </Link>
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.category}>
          <h2>Mis monumentos</h2>
          <List monumentsToRender={userMonuments} />
        </div>
        <div className={styles.category}>
          <h2>Cultura Arabe</h2>
          <List monumentsToRender={category2Monuments} />
        </div>
        <div className={styles.category}>
          <h2>Cultura Romana</h2>
          <List monumentsToRender={category3Monuments} />
        </div>
      </div>
    </div>
  );
}
