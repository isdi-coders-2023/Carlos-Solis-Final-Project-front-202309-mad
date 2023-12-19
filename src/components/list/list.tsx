import { Card } from '../card/card';
import styles from './list.module.scss';
import { Monument } from '../../entities/monuments';

//import { useRecipes } from '../../hooks/recipes.hook';

//
type Props = {
  monumentsToRender: Monument[] | undefined;
};

export function List({ monumentsToRender }: Props) {
  return (
    <div className={styles.listContainer}>
      <ul>
        {monumentsToRender?.map((item: Monument) => (
          <Card key={item.id} monument={item}></Card>
        ))}
      </ul>
    </div>
  );
}
