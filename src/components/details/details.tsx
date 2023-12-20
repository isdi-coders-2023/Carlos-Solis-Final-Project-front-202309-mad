import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './details.module.scss';
import { useMonuments } from '../../hooks/monuments.hooks';
import { Link, useNavigate } from 'react-router-dom';

export function Details() {
  const navigate = useNavigate();
  const { currentMonument } = useSelector(
    (state: RootState) => state.MonumentsState
  );
  const { deleteMonument /*, monumentDeleteState */ } = useMonuments();
  const handleDelete = () => {
    deleteMonument(currentMonument!.id);
    navigate(`/home/`);
  };

  const handleUpdate = () => {
    navigate(`/editpage/${currentMonument!.id}`);
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.details}>
        <div className={styles.cardDetails}>
          <img
            src={currentMonument?.monumentImg.url}
            width={50}
            alt="imagen de monument seleccionada"
          />
          <div>
            <div className="card-name">
              <p className="card-name">{currentMonument?.name}</p>
            </div>
            <div className="card-culture">
              <p className="card-culture">{currentMonument?.culture}</p>
            </div>
            <div className="card-description">
              <p className="card-description">{currentMonument?.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.actionButtons}>
            <div className={styles.deleteButtonContainer}>
              <Link to={`/login`}></Link>
              <img
                onClick={handleDelete}
                role="button"
                src="../../../public/logodelete.png"
                alt="Delete image"
              />
            </div>
            <div className={styles.editButtonContainer}>
              <img
                onClick={handleUpdate}
                role="buttonupdate"
                src="../../../public/0b191d72b16f7d2e643ef7cbfbb4f562-icono-de-escuela-de-trazo-de-lapiz.png"
                alt="Modify image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
