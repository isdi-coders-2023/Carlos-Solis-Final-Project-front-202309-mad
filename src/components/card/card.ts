/* Import { Link } from 'react-router-dom'; */
import styles from './card.module.scss';
import { makeImageURL } from '../../services/image';
import { Monument } from '../../entities/monuments';
import { useMonuments } from '../../hooks/monuments.hooks';

type Props = {
  monument: Monument;
};

export function Card({ monument: monument }: Props) {
  const { handleDetailsPage /* , deleteMonument */ } = useMonuments();
  const monumentImage =
    monument &&
    monument.img &&
    makeImageURL(monument?.img.publicId, monument?.img.height, 150);

  /* Const handleDelete = () => {
    deleteRecipe(recipe.id);
  }; */

  return (
    <>
      {/* <div className="delete-button-container">
        <img
          onClick={handleDelete}
          role="button"
          className=""
          src=""
          alt="Modify image"
        />
      </div> */}
      <div className={styles.Card}>
        {/*  <Link to={'/details' + recipe.id} style={{ textDecoration: 'none' }}> */}
        <article>
          <figure>
            <img
              src={monumentImage}
              alt={`imagen de ${monument.monumentName}`}
              onClick={() => handleDetailsPage(monument)}
              className={styles.monumentImg}
            ></img>
          </figure>
        </article>
        {/* </Link> */}
        <div className="card-info-container">
          <div className={styles.cardtitle}>
            <p className={styles.cardtitleP}>{monument.monumentName}</p>
          </div>
          <div className={styles.cardIngredients}>
            <p className={styles.cardIngredientsP}>{monument.ingredients}</p>
          </div>
          <div className={styles.cardDescription}>
            <p className={styles.cardDescriptionP}>{monument.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
