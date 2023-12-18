import { Link } from 'react-router-dom';
import { List } from '../../components/list/list';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function MainPage() {
  const { monuments } = useSelector((state: RootState) => state.MonumentsState);

  return (
    <>
      <div className="create-link-button">
        <Link to={'/create'}>
          <button type="button">Crea monumento</button>
        </Link>
      </div>
      <List monumentsToRender={monuments}></List>
    </>
  );
}
