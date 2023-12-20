import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMonuments } from '../../hooks/monuments.hooks';
import React from 'react';
import styles from './edit.page.module.scss';

export default function EditMonumentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const {
    loadAllMonuments,
    updateCurrentMonument,
    monuments,
    monumentUpdateState,
  } = useMonuments();

  const foundMonument = monuments.find((monuments) => monuments.id === id);

  const [findMonument, setMonument] = useState(foundMonument);

  useEffect(() => {
    if (findMonument) {
      setMonument(findMonument);
    }
  }, [findMonument]);

  useEffect(() => {
    loadAllMonuments();
  }, [monumentUpdateState]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setMonument((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleUpdate = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const updatedFormData = new FormData(formElement);
    console.log('desde editpage', updatedFormData);
    updateCurrentMonument(findMonument!.id, updatedFormData);
    navigate('/home');
  };

  return (
    <div className={styles.titleAndForm}>
      <form onSubmit={handleUpdate} role="form">
        <label htmlFor="monumentName">
          Nombre del monumento
          <input
            type="text"
            name="monumentName"
            value={findMonument?.name}
            onChange={handleInputChange}
          />
        </label>
        Cultura
        <input
          type="text"
          name="culture"
          value={findMonument?.culture}
          onChange={handleInputChange}
          required
        />
        Breve descripcion
        <input
          type="text"
          name="description"
          value={findMonument?.description}
          onChange={handleInputChange}
        />
        <select
          name="category"
          id="category"
          value={findMonument?.category}
          onChange={handleInputChange}
          required
        >
          <option value="Roman">Roman</option>
          <option value="Arab">Arab</option>
        </select>
        <input
          type="file"
          name="img"
          id="img"
          placeholder="Inserta aqui la imagen "
        />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
