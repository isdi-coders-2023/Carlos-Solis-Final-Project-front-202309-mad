/* Import { Link } from 'react-router-dom'; */
import styles from './card.module.scss';
import { Monument } from '../../entities/monuments';
import { useMonuments } from '../../hooks/monuments.hooks';
import { Link } from 'react-router-dom';

type Props = {
  monument: Monument;
};

export function Card({ monument }: Props) {
  const { handleDetailsPage } = useMonuments();

  return (
    <>
      <div className={styles.card}>
        <article>
          <figure>
            <img
              src={monument.monumentImg.url}
              alt={`imagen de ${monument.name}`}
              className={styles.recipeImg}
            ></img>
          </figure>
          <div className="card-info-container">
            <div className={styles.cardtitle}>
              <p className={styles.cardtitleP}>{monument.name}</p>
            </div>
            <div className={styles.cardIngredients}>
              <p className={styles.cardIngredientsP}>{monument.culture}</p>
            </div>
            <div className={styles.cardDescription}>
              <p className={styles.cardDescriptionP}>{monument.description}</p>
            </div>
          </div>
          <button className="details">
            <Link
              to={'/details/' + monument.id}
              onClick={() => handleDetailsPage(monument)}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Detalles
            </Link>
          </button>
        </article>
      </div>
    </>
  );
}
