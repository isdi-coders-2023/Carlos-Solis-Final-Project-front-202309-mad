import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { Details } from '../../components/details/details';
import { Monument } from '../../entities/monuments';

export default function DetailsPage() {
  const { id } = useParams();
  const { monuments } = useSelector((state: RootState) => state.MonumentsState);

  monuments.find((item) => item.id === id) as Monument;

  return (
    <>
      <Details></Details>
    </>
  );
}
