import styles from './card.module.scss';
import { Monument } from '../../entities/monuments';
import { useMonuments } from '../../hooks/monuments.hooks';

type Props = {
  monument: Monument;
};

export function Card({ monument }: Props) {
  const { handleDetailsPage /* , deleteRecipe */ } = useMonuments();
  return (
    <div className={styles.Card}>
      <figure>
        <img
          src={monument.monumentImg.url}
          onClick={() => handleDetailsPage(monument)}
          className={styles.monumentImage}
        />
      </figure>
      <div className={styles.cardInfoContainer}>
        <div className={styles.cardTitle}>
          <p className={styles.cardTitleP}>{monument.name}</p>
        </div>
        <div className={styles.cardCulture}>
          <p className={styles.cardCultureP}>{monument.culture}</p>
        </div>
        <div className={styles.cardDescription}>
          <p className={styles.cardDescriptionP}>{monument.description}</p>
        </div>
      </div>
    </div>
  );
}
