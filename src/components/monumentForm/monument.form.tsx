/* Import { Link } from 'react-router-dom'; */
import { useMonuments } from '../../hooks/monuments.hooks';
import { SyntheticEvent } from 'react';
import styles from './monument.form.module.scss';
import { useNavigate } from 'react-router-dom';

export default function MonumentForm() {
  const navigate = useNavigate();
  const { createMonument } = useMonuments();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    createMonument(formData);
    navigate('/home');
  };

  return (
    <div className={styles.titleAndForm}>
      <h2>Crea tu monumento</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.createMonumentForm}
        role="form"
      >
        <input type="text" name="name" placeholder="Titulo del monumento" />
        <input type="text" name="culture" placeholder="cultura" required />
        <input
          type="text"
          name="description"
          placeholder="Descripcion del monumento"
        />
        <select
          name="category"
          id="category"
          required
          placeholder="Elige la cultura"
        >
          <option value="Arab">Arabe</option>
          <option value="Roman">Romana</option>
        </select>
        <input
          type="file"
          name="monumentImg"
          id="img"
          placeholder="Inserta aqui la imagen "
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
