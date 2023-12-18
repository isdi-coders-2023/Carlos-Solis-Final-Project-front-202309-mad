import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './details.module.scss';
import { useMonuments } from '../../hooks/monuments.hooks';
import { Link, useNavigate } from 'react-router-dom';
import EditMonumentPage from '../pages/edit.page';

export function Details() {
  const navigate = useNavigate();
  const { currentMonument } = useSelector(
    (state: RootState) => state.MonumentsState
  );
  const { deleteMonument, monumentDeleteState } = useMonuments();

  const handleDelete = () => {
    deleteMonument(currentMonument!.id);
    // Después de eliminar, puedes redirigir a la página de inicio o a otra página
    navigate('/home'); // Cambia '/editpage/' según tu ruta de inicio o la ruta que desees
  };

  const handleUpdate = () => {
    // Puedes usar navigate aquí para ir a la página de edición
    navigate(`/editpage/${currentMonument!.id}`);
  };

  return (
    <>
      <div className={styles.deleteButtonContainer}>
        <img
          onClick={handleDelete}
          role="button"
          src="../../../public/logodelete.png" // Corregido el path de la imagen
          alt="Delete image"
        />
      </div>
      <div className={styles.editButtonContainer}>
        <Link to={`/editpage/${currentMonument!.id}`}>
          <img
            onClick={handleUpdate}
            role="button"
            src="../../../public/0b191d72b16f7d2e643ef7cbfbb4f562-icono-de-escuela-de-trazo-de-lapiz.png"
            alt="Modify image"
          />
        </Link>
      </div>
      <div className={styles.details}>
        <img
          src={currentMonument?.monumentImg.url}
          alt="imagen de monument seleccionada"
        />
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
        </div>
      </div>
    </>
  );
}
