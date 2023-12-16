import { Link } from 'react-router-dom';
import { List } from '../../../src/components/list/list';
import { useSelector } from 'react-redux';
import { RootState } from '../../../src/store/store';

export default function HomePage() {
  const { monuments } = useSelector((state: RootState) => state.MonumentsState);

  return (
    <>
      <div className="create-link-button">
        <Link to={'/createmonument'}>
          <button type="button">Crea tu monumento</button>
        </Link>
      </div>
      <List monumentsToRender={monuments}></List>
    </>
  );
}
