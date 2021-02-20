import Card from '../Card/Card';
import style from './List.module.scss';

const List = ( { list } ) => {

    return (
      <>
          <div className={style.container}>
              {list.map(el => <Card elem={el}/>)}
          </div>
      </>
    );
};

export default List;
