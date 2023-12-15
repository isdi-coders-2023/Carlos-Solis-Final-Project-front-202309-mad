import styles from './card.module.scss';
import { makeImageURL } from '../../services/image';
import { Monument } from '../../entities/monuments';
import { useMonuments } from '../../hooks/monuments.hooks';

type Props = {
  monument: Monument;
};

export function Card({ monument }: Props) {
  const { handleDetailsPage /* , deleteRecipe */ } = useMonuments();
  const monumentImage =
    monument &&
    monument.img &&
    makeImageURL(monument?.img.publicId, monument?.img.height, 150);

  return (
    <div className={styles.Card}>
      <figure>
        <img
          src={monumentImage}
          alt={`imagen de ${monument.name}`}
          onClick={() => handleDetailsPage(monument)}
          className={styles.monumentImg}
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
