import { useEffect } from 'react';
import { Card } from '../card/card';
import styles from './list.module.scss';
import { useMonuments } from '../../hooks/monuments.hooks';
import { Monument } from '../../entities/monuments';

type Props = {
  monumentsToRender: Monument[] | undefined;
};
export function List({ monumentsToRender }: Props) {
  const { loadAllMonuments } = useMonuments();

  useEffect(() => {
    loadAllMonuments();
  }, []);

  return (
    <div className="list-container">
      <div className="list-title-container">
        <h2>Lista</h2>
      </div>
      <ul className={styles.monumentsList}>
        {monumentsToRender?.map((item) => (
          <Card key={item.id} monument={item}></Card>
        ))}
      </ul>
    </div>
  );
}
