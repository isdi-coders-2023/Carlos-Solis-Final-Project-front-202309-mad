import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { makeImageURL } from '../../services/image.ts';
import styles from './details.module.scss';
import { useMonuments } from '../../hooks/monuments.hooks';
import { useNavigate } from 'react-router-dom';

export function Details() {
  const navigate = useNavigate();
  const { currentMonument: currentMonument } = useSelector(
    (state: RootState) => state.MonumentsState
  );
  const { deleteRecipe /* , updateCurrentRecipe  */ } = useMonuments();

  const handleMonument = () => {
    deleteMonument(currentMonument!.id);
  };

  navigate('/home');

  const handleUpdate = () => {};
  const monumentImg =
    currentMonument &&
    currentMonument.monumentImg &&
    makeImageURL(currentMonument.monumentImg.publicId, 300, 200);

  return (
    <>
      <div className={styles.deleteButtonContainer}>
        <img
          onClick={handleMonument}
          role="button"
          src="../../../public/logodelete.png"
          alt="Delete image"
        />
      </div>
      <div className={styles.editButtonContainer}>
        <img
          onClick={handleUpdate}
          role="button"
          src="../../../public/0b191d72b16f7d2e643ef7cbfbb4f562-icono-de-escuela-de-trazo-de-lapiz.png"
          alt="Edit image"
        />
      </div>
      <div className={styles.details}>
        <img src={currentMonument?.monumentImg.url} alt="imagen de monumento" />
        <div>
          <div className="card-name">
            <p className="card-name">{currentMonument?.name}</p>
          </div>
          <div className="card-ingredients">
            <p className="card-ingredients">{currentMonument?.culture}</p>
          </div>
          <div className="card-description">
            <p className="card-description">{currentMonument?.description}</p>
          </div>
          {/* <div className="card-year">
            <p className="card-year">{currentRecipe?.author.username}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
