import { Link, useNavigate } from 'react-router-dom';
import { List } from '../../../src/components/list/list';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/store/store';
import { useEffect } from 'react';

export default function HomePage() {
  const { monuments } = useSelector((state: RootState) => state.MonumentsState);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  });

  return (
    <>
      <button type="button">Crear monumento</button>
      <List monumentsToRender={monuments}></List>
    </>
  );
}
